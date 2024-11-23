import { createTheme } from '@mui/material'

export const theme = (() => {
  // const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#8A67AB',
          },
          secondary: {
            main: '#C29343',
          },
          info: {
            main: '#487CA5',
          },
          success: {
            main: '#548164',
          },
          warning: {
            main: '#CC782F',
          },
          error: {
            main: '#C4554D',
          },
          text: {
            primary: '#373530',
            secondary: '#787774',
            disabled: '#ddd',
          },
          background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#865DBB',
          },
          secondary: {
            main: '#C19138',
          },
          info: {
            main: '#447ACB',
          },
          success: {
            main: '#4F9768',
          },
          warning: {
            main: '#CB7B37',
          },
          error: {
            main: '#BE524B',
          },
          text: {
            primary: '#D4D4D4',
            secondary: '#9B9B9B',
            disabled: '#444',
          },
          background: {
            default: '#191919',
            paper: '#222222',
          },
        },
      },
    },
  })
})()
