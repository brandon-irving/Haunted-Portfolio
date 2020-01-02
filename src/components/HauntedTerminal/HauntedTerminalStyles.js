import styled, { css, keyframes, createGlobalStyle } from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

export const GlobalStyle = createGlobalStyle`

`

export const TerminalContainer = styled(Row)`
height: 150px

`
export const CommandsContainer = styled(Col)`

`
export const LogsContainer = styled(Col)`
display: ${props => props.theme.isMobile ? 'none' : ' block'};


`
export const HauntedTerminalContainer = styled(Container)`
height: 100vh;
background-color: ${props => props.theme.defaultColor};
background-image: radial-gradient(${props => props.theme.defaultBackgroundColor},  ${props => props.theme.defaultColor} 120%);
color: ${props => props.theme.defaultTextColor};
text-shadow: ${props => props.theme.defaultTextShadow};

`
const blink = keyframes`
0%, 50% {
    --ph: visible;
}

51%, 100% {
    --ph: hidden;
}
`
export const Terminal = styled(Container)`
`


export const Log = styled.div`
// position: absolute;
top: 7vh;
right: 10%;
color: ${props => props.theme.defaultTextColor};
font-weight: 300;
font-size: 14px;
line-height: 20px;
display: flex;
flex-direction: column-reverse;
font-family: 'M PLUS 1p', 'Open Sans', sans-serif;
&after {
    content: '';
	position: absolute;
	top: -2px;
	left: -7px;
	width: 1px;
	height: 100%;
	background:${props => props.theme.defaultTextColor};
}
`
export const GhostForm = styled.form`
position: fixed;
top: ${props=> props.theme.isMobile ? '80%' : '65%'};
left: 50%;
transform: translate(-50%, -50%);
${props =>
        props.theme.isMobile && css`

`}
`
export const GhostInput = styled.input`
	bottom: 30px;
	width: 240px;
	height: 35px;
    padding: 0 8px;
    font-size: 14px;
	background: transparent;
	outline: none;
	border: 1px solid ${props => props.theme.defaultTextColor};
	caret-color: ${props => props.theme.defaultTextColor};
	color: ${props => props.theme.defaultTextColor};
	font-weight: 300;
	font-family: 'M PLUS 1p', 'Open Sans', sans-serif;
	animation: ${blink} .65s infinite alternate;
    transition: border-color .1s, color .1s, text-shadow .1s, transform .3s 1.2s;

    :focus, :hover {
        border-color: ${props => props.theme.defaultInputHover};
        color: ${props => props.theme.defaultTextColor};
    }

    ::placeholder {
        color: ${props => props.theme.defaultTextColor};
        transition: opacity .1s, color .1s;
        visibility: var(--ph);
        
    }    
    :focus::placeholder, :hover::placeholder {
        color: transparent;
    }
    
    :focus::selection, :hover::selection {
        background: ${props => props.theme.defaultInputHover};
    }
  
`
export const GhostInputShadow = styled.div`
transform: translatex(2px);
filter: blur(4px);
opacity: .5;
width: 245px;
height: 40px;
border: 4px solid ${props => props.theme.defaultTextColor};
pointer-events: none;
transition: transform .3s 1.2s;
bottom: calc(31px - 2px);
margin-left: -2%;
margin-top: -15%;   
`

export const HauntedInputText = styled.div`
position: fixed;
top: ${props=> props.theme.isMobile ? '70%' : '50%'};
left: 50%;
transform: translate(-50%, -50%);
`
export const HauntedInputContainer = styled(Row)`
display: flex;
justify-content: center;

`