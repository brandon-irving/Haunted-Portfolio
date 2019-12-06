import React, { useRef, useEffect } from 'react'
import { screenTyper } from '../../utils/helperFunctions';
import { DetailText } from './DetailText';
import { Details } from './styled'
const PortfolioDetails = () => {
    const portfolioDetails = useRef(null)
    useEffect(() => {
        if (portfolioDetails.current !== null) {
            screenTyper(portfolioDetails.current, DetailText, 25)
        }
    }, [portfolioDetails])
    return (
        <Details ref={portfolioDetails} />

    )
}
export default PortfolioDetails