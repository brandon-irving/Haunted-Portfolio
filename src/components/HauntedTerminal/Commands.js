import { matrixTheme, redTheme, blueTheme, defaultTheme } from '../common/theme';

export const CommandsHandler = (command, arrayOfFunctions) => {
    const [setTerminalTheme, setShowSkills, setShowResume] = arrayOfFunctions

    if (command === 'run hide skills') {
        return setShowSkills(false)
    }
    if (command === 'run skills') {
        return setShowSkills(true)
    }
    if (command === 'run blue theme') {
        return setTerminalTheme(blueTheme)
    }
    if (command === 'run matrix theme') {
        return setTerminalTheme(matrixTheme)
    }
    if (command === 'run default theme') {
        return setTerminalTheme(defaultTheme)
    }
    if (command === 'run red theme') {
        return setTerminalTheme(redTheme)
    }
    if (command === 'run resume') {
        return setShowResume(true)
    }
}