import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PackageCheck } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function RequestSample() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interest: 'textiles',
    volume: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'requests'), {
        ...formData,
        status: 'new',
        createdAt: serverTimestamp()
      });
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError('Er is iets misgegaan bij het versturen: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Aanvraag Ontvangen!</h2>
          <p className="text-slate-600 mb-8">Dankuwel voor uw interesse in H&O Worldwide Solutions. Een van onze account managers neemt binnen 24 uur contact met u op betreft uw sample pack.</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Terug naar Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Terug naar website
        </button>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-indigo-900 px-8 py-10 text-white">
            <h1 className="text-3xl font-extrabold mb-2">Sample Pack / Offerte Aanvraag</h1>
            <p className="text-indigo-200">Vul hieronder uw projectdetails in. Wij reageren razendsnel.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium border border-red-100">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Bedrijfsnaam *</label>
                <input 
                  required
                  type="text" 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="Bijv. Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Contactpersoon *</label>
                <input 
                  required
                  type="text" 
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="Voor- en Achternaam"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Zakelijk E-mailadres *</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="naam@bedrijf.nl"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefoonnummer</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="+31 6 12345678"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interessegebied</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
                >
                  <option value="textiles">Premium Textiel (Turkije Hub)</option>
                  <option value="tech">Tech & Gadgets (China Hub)</option>
                  <option value="both">Combinatie / Giftboxes</option>
                  <option value="other">Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Schatting Volume</label>
                <select 
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
                >
                  <option value="">Selecteer volume...</option>
                  <option value="100-500">100 - 500 stuks</option>
                  <option value="500-2500">500 - 2.500 stuks</option>
                  <option value="2500-10000">2.500 - 10.000 stuks</option>
                  <option value="10000+">10.000+ stuks</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Projectomschrijving of Vraag</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 resize-none"
                placeholder="Beschrijf kort voor welk moment of doeleinde u merchandise zoekt..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>Versturen...</>
              ) : (
                <>Vraag Sample Pack Aan</>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Uw gegevens worden veilig verwerkt conform de GDPR richtlijnen en onze Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
