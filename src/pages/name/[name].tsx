import React from 'react'
import { CountryProps } from '../../interfaces'
import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { MainLayout } from '../../layout';
import { countriesApi } from '../../api';

interface Props {
    country: CountryProps
}

const CountryPage: NextPage<Props> = ({ country }) => {

    const { name, population, capital, flags, region, borders } = country

    return (
        <MainLayout >
            <h1>{name.common}</h1>
            {borders?.join(', ')}
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await countriesApi.get<CountryProps[]>("/region/america")

    const paths = data.map(({ name }) => (
        {
            params: {
                name: name.common
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

    const { data } = await countriesApi.get<CountryProps[]>(`/name/${name}`)

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
        newBorders.push(name.common)
    }

    const newCountry = {
        ...country,
        borders: newBorders
    }

    console.log(newCountry)

    return {
        props: {
            country: newCountry
        }
    }
}

export default CountryPage