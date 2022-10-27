import React,{useState,useEffect} from "react"
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
        <>
            <div className="flex justify-between items-center mx-2 relative lg:mx-5 pt-5 ">
                <h3 className="text-2xl font-bold ">Invy</h3>
                <div className="flex justify-center items-center">
                <button className="text-3xl" onClick={handleToggleNav}>{<IoApps/>}</button>
                </div>
            </div>
                {nav && (
                <div className="flex flex-col justify-center items-center p-2 absolute right-10 top-15 rounded-md bg-zinc-800 w-24">
                    <a>Home</a>
                    <a>About</a>
                </div>
                )}
        </>
        )
}
