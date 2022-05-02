import React from 'react'
import { useDarkMode } from '../../context'
import * as ST from '../../styles/components'

export const Navbar = () => {

    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <ST.CustomNavbar>
            navbar
        </ST.CustomNavbar>
    )
}
