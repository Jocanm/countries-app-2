import { useState } from "react"
import { getLocalTheme } from "../helpers"

export const useGetLocalTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(getLocalTheme())

    const toggleDarkMode = () => {
        localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
        setIsDarkMode(!isDarkMode)
    }

    return {
        isDarkMode,
        toggleDarkMode
    }

}
