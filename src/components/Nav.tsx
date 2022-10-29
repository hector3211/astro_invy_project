import React,{useState} from "react"
import { IoApps } from "react-icons/io5";
import {GiDonut} from "react-icons/gi"

export default function Navbar(){
    const [nav,setNav] = useState(false)
    const handleToggleNav = () => {
        if (nav){
            setNav(false)
        }else{
            setNav(true)
        }
    }
    return (
        <div className="z-50 fixed top-0 backdrop-blur-md w-full flex justify-between items-center px-5 py-1 mx-auto">
            <div className="flex items-center text-3xl lg:text-4xl">
            <a className="font-bold" href="/">Invy</a>
            <span className="ml-2"><GiDonut/></span>
            <p>'s</p>
            </div>
            <div className="flex justify-center items-center relative">
                <button className="text-3xl lg:text-4xl" onClick={handleToggleNav}>{<IoApps/>}</button>
            </div>
            {nav && (
                <div className="z-50 backdrop-blur-md bg-zinc-500/75 flex flex-col justify-between items-center p-2 absolute right-10 top-14 rounded-md w-24">
                    <a className="py-1" href="/">Home</a>
                    <a className="py-1" href="#menu">Menu</a>
                    <a className="py-1" href="/about">About</a>
                </div>
            )}
        </div>
        )
}
