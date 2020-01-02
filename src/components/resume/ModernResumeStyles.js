import styled from 'styled-components'

export const ResumePage = styled.div`
width: 100%;
padding-left: ${props => props.theme.isMobile ? '0' : '20%'};
height: 100vh;
overflow: scroll;
&:-webkit-scrollbar {
    display: none;
  }
`
export const BackButton = styled.h3`
&:hover {
    cursor: pointer;
}
`
