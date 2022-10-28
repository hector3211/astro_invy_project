import React,{useState} from "react"
import { IoApps } from "react-icons/io5";

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
            <div className="flex justify-between items-center mx-auto relative px-2 py-2">
                <a className="text-2xl font-bold hover:animate-bounce" href="/">Invy donuts</a>
                <div className="flex justify-center items-center ">
                <button className="text-3xl lg:text-4xl" onClick={handleToggleNav}>{<IoApps/>}</button>
                </div>
                {nav && (
                <div className="z-50 flex flex-col justify-between items-center p-2 absolute right-10 top-10 rounded-md bg-zinc-800 w-24">
                    <a className="py-2" href="/">Home</a>
                    <a className="py-2" href="/about">About</a>
                </div>
                )}
            </div>
        )
}
