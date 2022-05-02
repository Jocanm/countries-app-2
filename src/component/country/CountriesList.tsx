import React from 'react'
import { CountryProps } from '../../interfaces'
import { FC } from 'react';

interface Props {
    countries: CountryProps[]
}

export const CountriesList: FC<Props> = ({ countries }) => {
    return (
        <ul>
            {
                countries.map(country => (
                    <li key={country.name.common}>
                        {country.name.common}
                    </li>
                ))
            }
        </ul>
    )
}
