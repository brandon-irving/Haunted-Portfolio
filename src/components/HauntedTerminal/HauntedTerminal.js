import React, { useState, useEffect, useRef } from 'react'
import './HauntedTerminal.css'
import * as ghostWriter from '../../utils/ghostWriter'
// import { useGlobalContext } from '../context/globalContext';
import { HauntedInputText, CommandsContainer, HauntedTerminalContainer, Log, GhostInput, GhostForm, GhostInputShadow, GlobalStyle, HauntedInputContainer, LogsContainer, TerminalContainer } from './HauntedTerminalStyles';
import TerminalCommands from '../TerminalCommands/TerminalCommands'
import { CommandsHandler } from '../Commands';
/*  TODO: remove package react-pdf */
import ModernResume from '../resume/ModernResume';
import { wait } from '../../utils/helperFunctions';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';



const renderGhostText = async (setShowCommands) => {
    if (!sessionStorage.visited) {
        const glitchThis = document.getElementById('glitchThis')
        await wait(1000)
        await ghostWriter.glitchWrite(glitchThis, 'Hey....', )
        await wait(1200)
        await ghostWriter.glitchWrite(glitchThis, 'Do you like scary movies', )
        await wait(1500)
        await ghostWriter.glitchWrite(glitchThis, 'Im a portfolio, based off of that', )
        await wait(1500)
        await ghostWriter.glitchWrite(glitchThis, 'so...', )
        await wait(2000)
        await ghostWriter.glitchWrite(glitchThis, 'Do you find this scary?', )
        await wait(1000)
        await ghostWriter.glitchWrite(glitchThis, 'Hire', )
        await wait(200)
        await ghostWriter.glitchWrite(glitchThis, 'me', )
        await wait(200)
        await ghostWriter.glitchWrite(glitchThis, '', )
    }
    sessionStorage.setItem('visited', true)
    setShowCommands(true)

}


export const HauntedTerminal = (props) => {
    const hasVisited = sessionStorage.visited
    const runIntroText = !hasVisited

    // HTML ELEMENTS
    const glitchThis = document.getElementById('glitchThis')
    const logs = document.getElementById('logs')

    // HOOKS

    const terminalRef = useRef(null)
    const [inputValue, setInput] = useState('')
    const [showInput, setShowInput] = useState(false)
    const [showDescription, setShowDescription] = useState(false)
    const [showResume, setShowResume] = useState(false)
    const [showCommands, setShowCommands] = useState(false)

    // FUNCTIONS
    const handleSubmit = async (e) => {
        e.preventDefault()

        await ghostWriter.glitchWrite(glitchThis, inputValue)
        await wait(1000)
        await ghostWriter.glitchWrite(glitchThis, '')
        if (inputValue === "run resume") {
            await wait(100)
        }
        CommandsHandler(inputValue, [props.setTerminalTheme, setShowDescription, setShowResume])
        if (inputValue === "run clear") {
            return logs.innerHTML = ''
        }

        logs.innerHTML += `<h6 style="white-space: pre-line; margin-bottom: 0;">${inputValue + '\n'}</h6>`

        setInput('')
    }

    useEffect(() => {
        if (terminalRef.current !== null && !showInput && runIntroText) {
            renderGhostText(setShowCommands)
        }
    }, [terminalRef])
    const showTerminalCommands = (!showResume && showCommands && !showDescription) || (hasVisited && !showResume && !showDescription)
    return (
        <HauntedTerminalContainer fluid ref={terminalRef}>
            <GlobalStyle />
            <TerminalContainer >
                <CommandsContainer md={10} >
                    {showTerminalCommands && <TerminalCommands setShowInput={setShowInput} terminalRef={terminalRef} showDescription={showDescription} />}
                    {showResume &&
                        <ModernResume setShowResume={setShowResume} />
                    }
                </CommandsContainer>
                {showInput &&
                    <LogsContainer>
                        Logs:
                    <Log md={2} id="logs" />
                    </LogsContainer>
                }
            </TerminalContainer>
            <HauntedInputText hide={hasVisited} id="glitchThis" className="text" />

            {showInput && !showResume &&
                <HauntedInputContainer >
                    {showDescription && <PortfolioDetails />}
                    <GhostForm className="input-box" onSubmit={handleSubmit}>

                        <GhostInput value={inputValue} onChange={(e) => setInput(e.target.value)} id="input" placeholder="$" autoComplete="off" disabled="" />
                        <GhostInputShadow />
                        <button type="submit" style={{ display: 'none' }} />
                    </GhostForm>
                </HauntedInputContainer>}
        </HauntedTerminalContainer>

    )
}

