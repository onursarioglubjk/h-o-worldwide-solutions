import { useEffect, useState } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { format } from 'date-fns';
import { Settings, LogOut, Package, Mail, Building, Archive, CheckCircle, Clock, User as UserIcon } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRequests(data);
      setLoading(false);
      setError('');
    }, (err: any) => {
      console.error(err);
      if (err.message.includes('Missing or insufficient permissions')) {
        setError('Toegang geweigerd. U bent niet geautoriseerd als beheerder.');
      } else {
        setError(err.message);
      }
      setRequests([]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error("Login Error:", err);
    }
  };

  const handleLogout = () => signOut(auth);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'requests', id), { status: newStatus });
    } catch (err: any) {
      console.error(err);
      alert('Error updating status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Weet je zeker dat je deze aanvraag wilt verwijderen?')) return;
    try {
      await deleteDoc(doc(db, 'requests', id));
    } catch (err: any) {
      console.error(err);
      alert('Error deleting request');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">Laden...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-slate-100">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Settings className="w-8 h-8 text-slate-700" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">H&O Admin</h1>
          <p className="text-slate-500 mb-8 text-sm">Log in met uw geautoriseerde Google account om de aanvragen te beheren.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Inloggen met Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-indigo-400" />
          <span className="font-bold tracking-wider">H&O Worldwide / Procurement Dashboard</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="hidden sm:block text-slate-300">{user.email}</div>
          <button onClick={handleLogout} className="flex items-center gap-2 hover:text-red-400 transition-colors bg-white/10 px-3 py-1.5 rounded-md">
            <LogOut className="w-4 h-4" /> Uitloggen
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Binnengekomen Leads / Orders</h2>
          <div className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-bold shadow-sm">
            Totaal: {requests.length}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-lg mb-8 border border-red-200 font-medium">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {requests.map(req => (
            <div key={req.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`px-6 py-4 border-b flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4 ${req.status === 'new' ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-slate-400" />
                  <h3 className="text-xl font-bold text-slate-900 leading-none">{req.companyName}</h3>
                  {req.status === 'new' && (
                    <span className="bg-indigo-600 pl-2 pr-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 ml-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Nieuw
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <select 
                    value={req.status}
                    onChange={(e) => updateStatus(req.id, e.target.value)}
                    className={`text-sm font-bold px-3 py-1.5 rounded border outline-none cursor-pointer ${
                      req.status === 'new' ? 'bg-indigo-100 border-indigo-200 text-indigo-700' : 
                      req.status === 'contacted' ? 'bg-green-100 border-green-200 text-green-700' : 
                      'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <option value="new">Nieuw / Actie vereist</option>
                    <option value="contacted">Gevolg gegeven (Contacted)</option>
                    <option value="archived">Gearchiveerd</option>
                  </select>
                  <button onClick={() => handleDelete(req.id)} className="text-red-500 hover:text-red-700 p-2 ml-2 bg-red-50 hover:bg-red-100 rounded transition-colors">
                    Verwijder
                  </button>
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserIcon className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Contactpersoon</div>
                      <div className="font-semibold text-slate-900">{req.contactName}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">E-mail</div>
                      <a href={`mailto:${req.email}`} className="font-semibold text-indigo-600 hover:underline">{req.email}</a>
                    </div>
                  </div>
                  {req.phone && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Telefoon</div>
                        <div className="font-semibold text-slate-900">{req.phone}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Interessegebied</div>
                      <div className="inline-flex items-center px-3 py-1 rounded bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                        {req.interest === 'textiles' ? 'Premium Textiel (Turkije)' : req.interest === 'tech' ? 'Tech & Gadgets (China)' : req.interest === 'both' ? 'Combinatie / Giftboxes' : req.interest}
                      </div>
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Geschat Volume</div>
                      <div className="font-semibold text-slate-900">{req.volume || '-'}</div>
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Datum Ontvangen</div>
                      <div className="text-sm text-slate-600 font-medium">
                        {req.createdAt ? format(req.createdAt.toDate(), 'PPP HH:mm') : 'Zojuist'}
                      </div>
                   </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Projectomschrijving / Vraag</div>
                  <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                    {req.message || <span className="italic text-slate-400">Geen extra toelichting gegeven.</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {requests.length === 0 && !loading && !error && (
            <div className="text-center py-24 bg-white rounded-xl shadow-sm border border-slate-200">
              <Archive className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900">Nog geen aanvragen</h3>
              <p className="text-slate-500 mt-2">Nieuwe leads verschijnen automatisch op dit dashboard.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
