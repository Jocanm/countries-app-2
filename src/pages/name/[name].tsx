import React from 'react'
import { CountryProps } from '../../interfaces'
import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { MainLayout } from '../../layout';
import { countriesApi } from '../../api';
import * as ST from '../../styles/components';
import { CountryDetails } from '../../component/country';
import Image from 'next/image';

interface Props {
    country: CountryProps
}

const CountryPage: NextPage<Props> = ({ country }) => {

    const { name, flags } = country

    return (
        <MainLayout
            title={name.common}
            favicon={flags.svg}
        >
            <ST.DetailsViewWrapper>
                <Image
                    src={flags.svg || './assets/images/no-image.png'}
                    alt={name.common}
                    width={700}
                    height={400}
                />
                <CountryDetails
                    country={country}
                />
            </ST.DetailsViewWrapper>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await countriesApi.get<CountryProps[]>("/all")

    const paths = data.map(({ cca3 }) => (
        {
            params: {
                name: cca3
            }
        }
    ))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const { data } = await countriesApi.get<CountryProps[]>(`/alpha/${name}`)

    const countries = data.map(country => {
        const { name, region, capital, population, flags, subregion, tld, currencies, languages, borders } = country
        return { name, region, capital, population, flags, tld, currencies, subregion, languages, borders }
    })

    const country = countries[0]

    const { borders } = country
    const newBorders: string[] = []

    for (const border of borders || []) {
        const { data } = await countriesApi.get<CountryProps[]>(`/alpha/${border}`)
        const { name } = data[0]
        newBorders.push(`${name.common}/${border}`)
    }

    const newCountry = {
        ...country,
        borders: newBorders
    }

    return {
        props: {
            country: newCountry
        }
    }
}

export default CountryPage