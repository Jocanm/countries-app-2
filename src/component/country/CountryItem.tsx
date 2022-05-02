import React from 'react'
import { CountryProps } from '../../interfaces'
import { FC } from 'react';
import Image from 'next/image';
import * as ST from '../../styles/components';
import Link from 'next/link';

interface Props {
    country: CountryProps
}

export const CountryItem: FC<Props> = ({ country }) => {

    const { name, population, capital, flags, region, cca3 } = country

    return (
        <ST.CountryItemStyles>
            <Link href={`/name/${cca3}`} passHref>
                <Image
                    src={flags?.svg || "/assets/no-image.png"}
                    alt={name.common}
                    width={400}
                    height={250}
                />
            </Link>
            <ST.CountryInfoStyles>
                <h2>{name.common}</h2>
                <div>
                    <p>
                        Population:
                        <span> {new Intl.NumberFormat('de-DE').format(population)}</span>
                    </p>
                    <p>Region: <span>{region}</span></p>
                    {
                        capital && <p>Capital: <span>{capital}</span></p>
                    }
                </div>
            </ST.CountryInfoStyles>
        </ST.CountryItemStyles>
    )
}
