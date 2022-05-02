import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../component/ui';
import * as ST from '../styles/components';

interface Props {
    children: React.ReactNode
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
    return (
        <ST.ContentWrapperStyles>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </ST.ContentWrapperStyles>
    )
}
