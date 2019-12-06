export const wait = time => new Promise(resolve => setTimeout(resolve, time))

export const screenTyper = async (element, text, time) => {
    let waitTime = time ? time : 100
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text[i]
        await wait(waitTime)
    }
}