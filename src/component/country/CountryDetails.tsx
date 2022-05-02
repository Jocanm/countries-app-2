import React from 'react'
import { CountryProps } from '../../interfaces'
import * as ST from '../../styles/components'
import { FC } from 'react';
import { InformationCom } from './';
import { BorderList } from './';

interface Props {
    country: CountryProps
}

export const CountryDetails: FC<Props> = ({ country }) => {

    const { name, population, region, capital, tld, currencies, languages, borders } = country

    const currenciesList = Object.keys(currencies || {})

    const lang = Object.values(languages || {})

    return (
        <ST.CountrDetailsContainer>
            <h1>{name.common}</h1>
            <ST.CountryInformation>
                <div>
                    <InformationCom
                        title="Native Name: "
                        description={name.common}
                    />
                    <InformationCom
                        title="Population: "
                        description={new Intl.NumberFormat('de-DE').format(population)}
                    />
                    <InformationCom
                        title="Region: "
                        description={region}
                    />
                    {capital && <InformationCom
                        title="Capital: "
                        description={capital[0]}
                    />}
                </div>
                <div>
                    {tld && <InformationCom
                        title="Top Level Domain: "
                        description={tld[0]}
                    />}
                    <InformationCom
                        title="Currencies: "
                        description={currenciesList.join(", ")}
                    />
                    <InformationCom
                        title="Languages: "
                        description={lang.join(", ")}
                    />
                </div>
            </ST.CountryInformation>
            {borders && (
                <BorderList
                    borders={borders}
                />
            )}
        </ST.CountrDetailsContainer>
    )
}
