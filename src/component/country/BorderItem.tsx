import Link from 'next/link';
import React from 'react'
import { FC } from 'react';

interface Props {
    border: string
}

export const BorderItem: FC<Props> = ({ border }) => {

    const [toShow, toSend] = border.split("/")

    return (
        <Link href={`/name/${toSend}`} passHref>
            <li>{toShow}</li>
        </Link>
    )
}
