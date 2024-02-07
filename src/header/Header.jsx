import React from 'react'
import {Link, NavLink} from "react-router-dom";
function Header() {
  return (
    <nav className='h-14 bg-slate-500 pb-2 pt-3 flex justify-end'>
        <NavLink to="/" className={
            ({isActive})=>
            [
                isActive?"text-zinc-200 text-xl ":"",
                "inline mx-2  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-150"
        ]
        }>Home</NavLink>
        <NavLink to="/about" className={
            ({isActive})=>[
                isActive?"text-zinc-200 text-xl ":"",
                "inline mx-2  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-150"
            ]
        }>About</NavLink>
       <NavLink to="/contact" className={
             ({isActive})=>[
                isActive?"text-zinc-200 text-xl ":"",
                "inline mx-2  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-150"
            ]
        }>Contact</NavLink>
        
    </nav>
  )
}

export default Header