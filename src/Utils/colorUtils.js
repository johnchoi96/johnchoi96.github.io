import { useContext } from 'react'
import { ThemeContext } from '../App'

export function fontColorForBackground(color) {
    color = color.charAt(0) === '#' ? color.substring(1, 7) : color
    const red = parseInt(color.substring(0, 2), 16)
    const green = parseInt(color.substring(2, 4), 16)
    const blue = parseInt(color.substring(4, 6), 16)
    return red * 0.213 + green * 0.715 + blue * 0.072 > 255 * 0.5
        ? 'black'
        : 'white'
}

export function getBackgroundColor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDarkMode } = useContext(ThemeContext)
    return isDarkMode ? darkColor : lightColor
}

export function getFontColorText() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDarkMode } = useContext(ThemeContext)
    return isDarkMode ? 'white' : 'black'
}

export function getFontColor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDarkMode } = useContext(ThemeContext)
    return isDarkMode ? '#FFFFFF' : '#000000'
}

export const lightColor = '#DEE4E7'

export const darkColor = '#003057'