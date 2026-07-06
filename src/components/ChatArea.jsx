import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase/config';
import SendIcon from '@mui/icons-material/Send';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

const ChatArea = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const scrollRef = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt", "asc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        });
        return unsubscribe;
    }, [])
    const sendMessages = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        await addDoc(collection(db, "messages"), {
            text: input,
            uid: auth.currentUser.uid,
            photoURL: auth.currentUser.photoURL,
            displayName: auth.currentUser.displayName,
            createdAt: serverTimestamp(),
        });
        setInput('');
        scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    };
    return (
        <div className='flex-1 flex flex-col h-full min-w-0 bg-slate-900/50'>
            <div className='flex-1 overflow-y-auto p-4 md:p-6 space-y-2 min-h-0'>
                {
                    messages?.map(msg => (
                        <div key={msg.id} className={`flex ${msg.uid === auth.currentUser?.uid ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] sm:max-w-xs  md:max-w-md p-3 rounded-2xl ${msg.uid === auth.currentUser?.uid ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>
                                <p className="text-[10px] truncate md:text-xs opacity-50 mb-1">{msg.displayName}</p>
                                <p className='text-sm md:text-base break-words'>{msg.text}</p>
                            </div>
                        </div>
                    ))
                }
                <div ref={scrollRef} />
            </div>
            <form onSubmit={sendMessages} className='p-3 md:p-4 bg-slate-950/80 border-t border-slate-800 flex gap-2 items-center md:gap-4'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message ..."
                    className="flex-1 bg-slate-800 border-none rounded-xl py-2.5 px-4 text-[15px] md:text-base min-w-0 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button type="submit" className="bg-indigo-600 p-2.5 md:p-3 rounded-xl hover:bg-indigo-500 transition-all flex shrink-0">
                    <SendIcon sx={{ fontSize: { xs: 20, md: 24 }, color: 'white' }} />
                </button>
            </form>
        </div>
    )


}
export default ChatArea;