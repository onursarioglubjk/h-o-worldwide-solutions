import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function ChatWidget({ t }: { t: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Welkom bij H&O Worldwide Solutions. Ik ben uw virtuele Account Manager. Hoe kan ik u vandaag helpen met uw custom merchandise project?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      if (e.detail?.message) {
        setInput(e.detail.message);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    };
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    const newMessages: Message[] = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
         throw new Error(data.error || "Network response was not ok");
      }
      
      setMessages([...newMessages, { role: "model", text: data.reply }]);
    } catch (error: any) {
      console.error("Failed to send message:", error);
      setMessages([...newMessages, { role: "model", text: error.message || "Mijn excuses, er trad een communicatiefout op. Kunt u het later nog eens proberen of direct onze specialisten bellen?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white border text-sm border-slate-200 shadow-2xl rounded-2xl w-80 sm:w-96 p-0 mb-4 overflow-hidden flex flex-col h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-indigo-900 px-4 py-3 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center border border-indigo-700">
                <Bot className="w-5 h-5 text-indigo-100" />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">H&O Account Manager</p>
                <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-semibold">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-slate-900 text-white rounded-br-none" 
                    : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-slate-500">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                  <span className="text-xs font-medium">Berekent de optimale supply chain...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Typ uw vraag..."
              className="flex-1 px-4 py-2 bg-slate-100 border-none rounded-full outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all shadow-inner text-slate-900 font-medium placeholder:text-slate-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-900 text-white scale-90' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
