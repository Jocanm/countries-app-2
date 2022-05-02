import { NextPage } from 'next'
import React from 'react'
import { MainLayout } from '../layout'
import { FilterSection } from '../component/ui/FilterSection';

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Countries">
            <FilterSection/>
        </MainLayout>
    )
}

export default HomePage