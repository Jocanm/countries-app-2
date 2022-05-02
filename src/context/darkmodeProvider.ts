import { createContext, useContext } from "react";

interface ContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkMode = createContext({} as ContextProps)

export const useDarkMode = () => {
    return useContext(DarkMode)
}