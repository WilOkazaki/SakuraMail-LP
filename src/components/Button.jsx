import React from 'react'
import { useContext } from "react"
// import { NavLink } from "react-router-dom"
import AuthContext from "../context/auth"

export default function Button() {
    const { user, login, logout } = useContext(AuthContext)

    return (
        <div>
            <div className="cta">
            {/* Render this button if the user is logged out */}
    
            {!user && (
                <button
                className="bg-pink-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-pink-500 border border-pink-500"
                onClick={login}
                >
                Log In
                </button>
            )}
    
            {/* Render this button if the user is logged in */}
            {user && (
                <button
                className="bg-pink-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-pink-500 border border-pink-500"
                onClick={logout}
                >
                Log Out
                </button>
            )}
            </div>
        </div> 
      
    )
}
