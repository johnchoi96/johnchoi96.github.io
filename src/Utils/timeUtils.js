
export function convertEpochSecondsToEST(seconds) {
    let milliseconds = seconds * 1000
    let dateObject = new Date(milliseconds)
    let options = { timeZone: 'America/New_York' }
    let humanReadableDateEST = dateObject.toLocaleString('en-US', options)
    return `${humanReadableDateEST} EST`
}