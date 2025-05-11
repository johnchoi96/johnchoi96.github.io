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


export const jpmcLightColor = '#DEE4E7'

export const jpmcDarkColor = '#003057'

export function getBackgroundColor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDarkMode } = useContext(ThemeContext)
    const currentDate = new Date()
    const jpmcLastDay = new Date('2025-05-22')
    if (currentDate < jpmcLastDay) {
        return isDarkMode ? jpmcDarkColor : jpmcLightColor
    }
    const colorUtils = new ColorUtils(isDarkMode)
    return isDarkMode ? colorUtils.getRandomDarkColor(isDarkMode) : colorUtils.getRandomLightColor(isDarkMode)
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

export class ColorUtils {

    static instance = null

    isCurrentlyDarkMode = true

    currentColor = ''

    constructor(isDarkMode) {
        if (ColorUtils.instance) {
            return ColorUtils.instance
        }
        ColorUtils.instance = this

        this.isCurrentlyDarkMode = isDarkMode ?? true
        if (isDarkMode) {
            const randomIndex = Math.floor(Math.random() * this.darkColors.length)
            this.currentColor = this.darkColors[randomIndex]
        } else {
            const randomIndex = Math.floor(Math.random() * this.lightColors.length)
            this.currentColor = this.lightColors[randomIndex]
        }
    }

    lightColors = [
        '#F8F4E6', // Starlight
        '#A4C8E1', // Pale blue
        '#8DBE99' // Light green
    ]

    darkColors = [
        '#1D1D1F', // Space Gray
        '#161617' // Midnight
    ]

    getRandomLightColor(isDarkMode) {
        if (this.isCurrentlyDarkMode === isDarkMode) {
            return this.currentColor
        }

        this.isCurrentlyDarkMode = isDarkMode
        const randomIndex = Math.floor(Math.random() * this.lightColors.length)
        const newColor = this.lightColors[randomIndex]
        this.currentColor = newColor
        return newColor
    }

    getRandomDarkColor(isDarkMode) {
        if (this.isCurrentlyDarkMode === isDarkMode) {
            return this.currentColor
        }

        this.isCurrentlyDarkMode = isDarkMode
        const randomIndex = Math.floor(Math.random() * this.darkColors.length)
        const newColor = this.darkColors[randomIndex]
        this.currentColor = newColor
        return newColor
    }
}