import styled, { css } from 'styled-components'

export const Details = styled.div`
width: 45rem;
font-size: 20pt;
line-height: 40px;
right: 24%;
top: 25%;
${props => props.theme.isMobile && css`
padding: 30px;
font-size: 20pt;
`}
`