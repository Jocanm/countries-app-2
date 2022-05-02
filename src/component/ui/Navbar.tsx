import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { useDarkMode } from '../../context'
import * as ST from '../../styles/components'

export const Navbar = () => {

    const { theme, toggleTheme } = useDarkMode()

    const isDarkMode = theme === 'dark'

    return (
        <ST.CustomNavbar>
            <h2>Where in the world?</h2>
            <section onClick={toggleTheme}>
                {
                    isDarkMode
                        ? <BsMoonFill />
                        : <BsMoon />
                }
                <h4>Dark Mode</h4>
            </section>
        </ST.CustomNavbar>
    )
}
