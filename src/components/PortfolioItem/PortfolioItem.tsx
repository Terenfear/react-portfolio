import React from 'react'


const PortfolioItem = ({ children }: React.PropsWithChildren<unknown>): JSX.Element => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(1rem, 1fr) minmax(auto, 4fr) minmax(1rem, 1fr)',
            gap: '1rem'
        }}>
            <div />
            {children}
            <div />
        </div>
    )
}

export default PortfolioItem
