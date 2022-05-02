import React from 'react'
import { CountryProps } from '../../interfaces'
import { FC } from 'react';
import { CountryItem } from './CountryItem';
import * as ST from '../../styles/components';

interface Props {
    countries: CountryProps[]
}

export const CountriesList: FC<Props> = ({ countries }) => {
    return (
        <ST.CountriesListStyles>
            {
                countries.map(country => (
                    <CountryItem
                        key={country.name.common}
                        country={country}
                    />
                ))
            }
        </ST.CountriesListStyles>
    )
}
