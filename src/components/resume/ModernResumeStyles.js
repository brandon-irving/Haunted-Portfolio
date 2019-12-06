import styled from 'styled-components'

export const ResumePage = styled.div`
width: 100%;
padding-left: ${props => props.theme.isMobile ? '0' : '20%'};
`
export const BackButton = styled.h3`
&:hover {
    cursor: pointer;
}
`
