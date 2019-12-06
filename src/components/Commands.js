import { matrixTheme, redTheme, blueTheme, defaultTheme } from '../common/theme';

export const CommandsHandler = async (command, arrayOfFunctions) => {
    const [setTerminalTheme, setShowDescription, setShowResume] = arrayOfFunctions

    if (command === 'run hide description') {
        setShowDescription(false)
        return true
    } else if (command === 'run description') {
        setShowDescription(true)
        return true
    } else if (command === 'run blue theme') {
        setTerminalTheme(blueTheme)
        return true
    } else if (command === 'run matrix theme') {
        setTerminalTheme(matrixTheme)
        return true
    } else if (command === 'run default theme') {
        setTerminalTheme(defaultTheme)
        return true
    } else if (command === 'run red theme') {
        setTerminalTheme(redTheme)
        return true
    } else if (command === 'run resume') {
         setShowResume(true)
         return true
    } else if (command === 'run terminal') {
        setShowDescription(false)
        setShowResume(false)
        return true
    }
    else return false
}