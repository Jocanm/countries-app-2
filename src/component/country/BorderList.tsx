import React, { FC } from 'react'
import { BorderItem } from './BorderItem'

interface Props {
    borders: string[]
}

export const BorderList: FC<Props> = ({ borders }) => {

    return (
        <div className='borders'>
            <span>Border countries:</span>
            <ul>
                {[...borders].map(border => (
                    <BorderItem
                        key={border}
                        border={border}
                    />
                ))}
            </ul>
        </div>
    )
}
