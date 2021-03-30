export const theme = {
  colors: {
    black: 'hsl(0, 0%, 4%)',
    black_bis: 'hsl(0, 0%, 7%)',
    black_ter: 'hsl(0, 0%, 14%)',
    grey_darker: 'hsl(0, 0%, 21%)',
    grey_dark: 'hsl(0, 0%, 29%)',
    grey: 'hsl(0, 0%, 48%)',
    grey_light: 'hsl(0, 0%, 71%)',
    grey_lighter: 'hsl(0, 0%, 86%)',
    grey_lightest: 'hsl(0, 0%, 93%)',
    white_ter: 'hsl(0, 0%, 96%)',
    white_bis: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    orange: 'hsl(14, 100%, 53%)',
    yellow: 'hsl(44, 100%, 77%)',
    green: 'hsl(153, 53%, 53%)',
    turquoise: 'hsl(171, 100%, 41%)',
    cyan: 'hsl(207, 61%, 53%)',
    blue: 'hsl(229, 53%, 53%)',
    purple: 'hsl(271, 100%, 71%)',
    red: 'hsl(348, 86 %, 61 %)',
    background: '#ebebeb',
    primary: 'rgb(72, 95, 199)'
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif"
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem'
    }
  },
  media: {
    lteMedium: '(max-width: 768px)'
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem'
  }
}

import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  ...theme
}

export const darkTheme = {
  ...theme
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${props => props.theme.font.family.default};
    height: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`
