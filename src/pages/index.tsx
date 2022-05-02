import { NextPage } from 'next'
import React from 'react'
import { MainLayout } from '../layout'

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Countries">
            <div>HomePage</div>
        </MainLayout>
    )
}

export default HomePage