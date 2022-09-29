
import {fontColorForBackground} from './colorUtils'

test('verify black font color on white background', () => {
    const backgroundColor = '#FFFFFF'
    const expectedFontColor = 'black'

    const fontColor = fontColorForBackground(backgroundColor)
    expect(fontColor).toBe(expectedFontColor)
})

test('verify white font color on black background', () => {
    const backgroundColor = '#000000'
    const expectedFontColor = 'white'

    const fontColor = fontColorForBackground(backgroundColor)
    expect(fontColor).toBe(expectedFontColor)
})

test('verify white font color on blue background', () => {
    const backgroundColor = '#0066FF'
    const expectedFontColor = 'white'

    const fontColor = fontColorForBackground(backgroundColor)
    expect(fontColor).toBe(expectedFontColor)
})