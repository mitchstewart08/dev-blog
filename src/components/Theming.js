import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.tw.purple["800"],
      text: colors.tw.gray["900"],
      bodyBg: colors.tw.gray["100"],
      headerBg: colors.tw.purple["800"],
      link: colors.tw.purple["500"],
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.tw.gray["800"],
      text: colors.tw.gray["400"],
      bodyBg: colors.tw.gray["900"],
      headerBg: colors.tw.gray["800"],
      link: colors.tw.yellow["500"],
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
