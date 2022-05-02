import { useEffect, useState } from "react"
import { themeType } from "../interfaces"

export const useGetLocalTheme = () => {

    const [theme, setTheme] = useState<themeType>('light')

    const toggleTheme = () => {
        const toSet = theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", toSet)
        setTheme(toSet)
    }

    useEffect(()=>{
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme as themeType)
    },[])

    return {
        theme,
        toggleTheme
    }

}
