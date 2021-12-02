import React from 'react'
import PortfolioItem, { ALL_CONTENT_COLUMNS, PortfolioItemProps } from './PortfolioItem'

const SimplePortfolioItem: React.FC<
    React.PropsWithChildren<Omit<PortfolioItemProps, 'startWithLargeArea'>>
> = (props) => {
    return (
        <PortfolioItem {...props}>
            <div style={{
                gridColumn: ALL_CONTENT_COLUMNS,
                gridRow: '1/-1'
            }}>
                {props.children}
            </div>
        </PortfolioItem>
    )
}

export default SimplePortfolioItem
