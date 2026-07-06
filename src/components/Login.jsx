import React from "react";
import { auth,googleProvider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import {Button} from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google";
import { limitToLast } from "firebase/firestore";

const Login = ()=>{
    const login = ()=>{
        signInWithPopup(auth,googleProvider);
    }
    return(
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-4">
            <div className="w-full max-w-[90%] sm:max-w-md p-8 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col items-center">
                
                <div className="p-4 bg-indigo-950/50 rounded-full border border-indigo-500/30 mb-6 shadow-inner">
                    <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white pb-3 tracking-tight">DevLounge</h1>
                
                <p className="text-sm sm:text-base text-slate-400 mb-10 text-center leading-relaxed">
                    A real-time communication hub designed for <span className="text-indigo-300">instant connectivity</span> and modern web development.
                </p>
                
                <Button 
                    fullWidth
                    sx={{
                        bgcolor: 'rgba(99, 102, 241, 0.1)', 
                        color: 'white',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        '&:hover': { 
                            bgcolor: 'rgba(99, 102, 241, 0.3)',
                            borderColor: 'rgba(99, 102, 241, 0.5)'
                        }, 
                        px: 4, 
                        py: 1.8, 
                        borderRadius: '16px',
                        textTransform: 'none',
                        fontWeight: '600',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                    }} 
                    variant="outlined" 
                    startIcon={<GoogleIcon sx={{ color: '#4285F4' }} />} 
                    onClick={login}
                >
                    Continue with Google
                </Button>

                <p className="text-xs text-slate-600 mt-12">Built by Shaheer Awan, for Developers.</p>
            </div>
        </div>
    )
};
export default Login;