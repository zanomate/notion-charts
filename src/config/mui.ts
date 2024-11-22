import { createTheme } from '@mui/material'

export const theme = (() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#865DBB' : '#8A67AB',
      },
      secondary: {
        main: isDark ? '#C19138' : '#C29343',
      },
      info: {
        main: isDark ? '#447ACB' : '#487CA5',
      },
      success: {
        main: isDark ? '#4F9768' : '#548164',
      },
      warning: {
        main: isDark ? '#CB7B37' : '#CC782F',
      },
      error: {
        main: isDark ? '#BE524B' : '#C4554D',
      },
      text: {
        primary: isDark ? '#D4D4D4' : '#373530',
        secondary: isDark ? '#9B9B9B' : '#787774',
        disabled: '#ddd',
      },
      background: {
        default: isDark ? '#191919' : '#FFFFFF',
      },
    },
  })
})()
