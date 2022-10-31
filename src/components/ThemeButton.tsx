import React,{useState,useEffect} from "react";
import {BsSun,BsMoon} from "react-icons/bs"

export default function Theme(){
    const [mounted,setMounted] = useState(false)
    const [theme,setTheme] = useState(() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
        }
        return 'light'
    })
    const toggleTheme = () => {
        const thme = theme === 'light' ? 'dark': 'light'
        localStorage.setItem('theme',thme)
        setTheme(thme)
    }
    useEffect(() =>{
        const root = document.documentElement
        if(theme === 'light') {
                root.classList.remove('dark')
        }else{
                root.classList.add('dark')
        }
    },[theme])

    useEffect(()=>{
            setMounted(true)
        },[])

    return mounted ? (
    <header>
        <div className="mr-2 pt-2">
            {mounted && theme === 'dark' ? (
                <button className="text-xl lg:text-4xl" onClick={toggleTheme}>
                    <BsSun/>
                </button>
            ):(
                <button className="text-xl lg:text-4xl" onClick={toggleTheme}>
                    <BsMoon/>
                </button>
            )
            }
        </div>
    </header>
    ):(<div/>)
}
