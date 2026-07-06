import React, { useState, useEffect } from 'react';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
function App() {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  if (!user) return <Login />;
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-white relative">
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-950 border-r border-slate-800 transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 flex flex-col h-full flex-shrink-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 h-full flex flex-col min-w-0">

        <div className="h-14 w-full bg-slate-950 border-b border-slate-800 flex items-center px-4 md:hidden flex-shrink-0">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="ml-3 font-semibold text-sm tracking-wide text-indigo-400">DevLounge</span>
        </div>

        <ChatArea />
      </div>

    </div>
  )
}

export default App
