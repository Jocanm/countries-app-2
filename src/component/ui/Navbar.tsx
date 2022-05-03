import Link from 'next/link'
import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { useDarkMode, useFilterContext } from '../../context'
import * as ST from '../../styles/components'

export const Navbar = () => {

    const { theme, toggleTheme } = useDarkMode()
    const { name, region } = useFilterContext()

    const isDarkMode = theme === 'dark'

    return (
        <ST.CustomNavbar>
            <Link href="/" passHref>
                <h2 style={{ cursor: "pointer" }}>
                    Where in the world?
                </h2>
            </Link>
            <section onClick={toggleTheme}>
                {
                    isDarkMode
                        ? <BsMoonFill />
                        : <BsMoon />
                }
                <h4>Dark Mode</h4>
            </section>
            {name}
            {region}
        </ST.CustomNavbar>
    )
}
