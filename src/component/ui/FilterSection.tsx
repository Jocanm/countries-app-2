import React from 'react'
import * as ST from '../../styles/components'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const FilterSection = () => {

    return (
        <ST.FilterSectionWrapper>

            <ST.InputSectionStyled>
                <FaSearch />
                <input
                    placeholder='Search for a country...'
                />
            </ST.InputSectionStyled>

            <ST.SelectSectionStyled>
                <MdKeyboardArrowDown/>
                <select defaultValue="">
                    <option disabled value="">Filter by region</option>
                </select>
            </ST.SelectSectionStyled>

        </ST.FilterSectionWrapper>
    )
}
