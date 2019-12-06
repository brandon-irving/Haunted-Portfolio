import React, { useEffect, useRef } from 'react'
import { TerminalResponse } from './TerminalCommandStyles';
import { wait, screenTyper } from '../../utils/helperFunctions';
import { divider, welcomeText, terminalInstructionText } from './Text';

const TerminalCommands = ({ setShowInput }) => {
    const topDivider = useRef(null)
    const terminalCommands = useRef(null)
    const terminalInstructions = useRef(null)
    const bottomDivider = useRef(null)
    const welcomePrompt = useRef(null)

    const typeTerminalCommands = async () => {
        await screenTyper(topDivider.current, divider, 10)
        await screenTyper(bottomDivider.current, divider, 10)
        await wait(100)
        await screenTyper(welcomePrompt.current, welcomeText, 25)
        await screenTyper(terminalCommands.current, 'Terminal Commands:', 25)
        await screenTyper(terminalInstructions.current, terminalInstructionText, 25)
        setShowInput(true)
        sessionStorage.setItem("ranCommandAnimation", true)
    }

    useEffect(() => {
        if (topDivider.current !== null && !sessionStorage.ranCommandAnimation) {
            typeTerminalCommands()
        }
        else if (topDivider.current !== null && sessionStorage.ranCommandAnimation) {
            setShowInput(true)
        }
    }, [topDivider])
    return (
        <TerminalResponse >
            {!sessionStorage.ranCommandAnimation ?
                <React.Fragment>
                    <p ref={topDivider} />
                    <h5 ref={welcomePrompt} style={{ whiteSpace: 'pre-line', }} />
                    <h5 ref={terminalCommands} />
                    <h6 ref={terminalInstructions} style={{ whiteSpace: 'pre-line', }} />
                    <p ref={bottomDivider} />
                </React.Fragment>
                :
                <React.Fragment>
                    <p ref={topDivider}>{divider}</p>
                    <h5 ref={welcomePrompt} style={{ whiteSpace: 'pre-line', }}>{welcomeText}</h5>
                    <h5 ref={terminalCommands}>Terminal Commands:</h5>
                    <h6 ref={terminalInstructions} style={{ whiteSpace: 'pre-line', }}>{terminalInstructionText}</h6>
                    <p ref={bottomDivider}>{divider}</p>
                </React.Fragment>
            }

        </TerminalResponse>
    )
}

export default TerminalCommands