import React, { FC } from 'react'
import Head from 'next/head';
import * as ST from '../styles/components';

interface Props {
    children: React.ReactNode
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ST.ContentWrapperStyles>
                {children}
            </ST.ContentWrapperStyles>
        </>
    )
}
