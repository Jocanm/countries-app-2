import { NextPage, GetStaticProps } from 'next';
import React from 'react'
import { MainLayout } from '../layout'
import { FilterSection } from '../component/ui/FilterSection';
import { CountriesList } from '../component/country';
import * as ST from '../styles/components';
import { countriesApi } from '../api';
import { CountryProps } from '../interfaces';

interface Props {
    countries: CountryProps[]
}

const HomePage: NextPage<Props> = ({ countries }) => {
    return (
        <MainLayout title="Countries">
            <ST.IndexWrapper>
                <FilterSection />
                <CountriesList
                    countries={countries}
                />
            </ST.IndexWrapper>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    // const { data } = await countriesApi.get<CountryProps[]>("/all")
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json() as CountryProps[]

    const countries = data.map(country => {
        const { name, region, capital, population, flags, cca3 } = country
        return { name, region, population, flags, cca3, capital: capital || null }
    })

    return {
        props: {
            countries
        }
    }

}

export default HomePage