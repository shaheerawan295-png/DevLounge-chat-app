import React from "react";
import { auth } from '../firebase/config';
import { Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';

const Sidebar = () => {
    return (
        <div className="w-80 h-full bg-slate-950 border-r border-slate-800 flex flex-col">
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
                <Avatar src={auth.currentUser?.photoURL} />
                <IconButton onClick={() => { auth.signOut() }} sx={{ color: '#94a3b8' }}>
                    <LogoutIcon />
                </IconButton>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
                <div className="flex items-center gap-3 p-3 bg-indigo-600/20 rounded-xl cursor-pointer">
                    <div className="bg-indigo-500 p-2 rounded-lg">
                        <ChatIcon sx={{ color: 'white' }} />
                    </div>
                    <div>
                        <p className="text-white font-medium">Global Lounge</p>
                        <p className="text-slate-400 text-xs">Public community room</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar; 