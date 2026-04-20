import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const rawApiKey = process.env.GEMINI_API_KEY;
      const apiKey = rawApiKey?.replace(/['"]/g, '').trim();

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "YOUR_GEMINI_API_KEY") {
        return res.status(500).json({ error: "Gemini API-sleutel ontbreekt of is ongeldig. Configureer deze in de Settings." });
      }

      const ai = new GoogleGenAI({ apiKey });

      // Transform history for the model
      const formattedHistory = (history || [])
        // GenAI expects conversation to start with user, skip initial model message if it's the very first
        .filter((msg: any, idx: number) => !(idx === 0 && msg.role === "model"))
        .map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        }));

      const systemInstruction = `Je bent een Senior Account Manager bij H&O Worldwide Solutions. 
Je bent beleefd, deskundig en proactief. Je spreekt B2B klanten (zoals inkoopafdelingen van grote corporates, consultancy firma's, FMCG-merken) aan met een focus op efficiëntie, schaalvoordelen en ontzorging.
Focus op onze data en Unique Selling Points:
- Turkije: Hoogwaardig textiel, near-shoring, ultra-snelle levering. Gemiddelde levertijd: 2-3 weken.
- China: Technologische gadgets, innovatie, maximale schaalvoordelen voor grote volumes. Gemiddelde levertijd: 8-10 weken.
- Compliance: Al onze fabrieken voldoen streng aan EU-normen (incl. CE-markering voor elektronica) en ondergaan strenge sociale audits. Wij nemen alle compliance zorgen weg.
- Service: Wij verzorgen de VOLLEDIGE logistieke keten (SPOC). "Van ontwerp tot levering aan de deur."

Reageer professioneel. Help de klant door de juiste vragen te stellen over hun supply chain behoeftes en volumes. Houd antwoorden beknopt.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            ...formattedHistory,
            {role: "user", parts: [{text: message}]}
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      
      let errMsg = "Interne serverfout bij het verwerken van uw bericht.";
      if (error.message && error.message.includes("API key not valid")) {
        errMsg = "De ingestelde Gemini API-sleutel is ongeldig. Pas dit aan in de settings.";
      }
      
      res.status(500).json({ error: errMsg });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
