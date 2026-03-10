// src/theme.ts
import { createTheme, Shadows } from '@mui/material/styles'
import { koKR } from '@mui/x-date-pickers/locales'
import { convertToRem } from '~/utils/style-utils'

const theme = createTheme(
  {
    palette: {
      solid_neutral: {
        0: '#ffffff',
        1: '#000',
        25: '#f5f6f7',
        50: '#f1f2f3',
        100: '#e1e2e5',
        900: '#090a0b',
        300: '#a3a5ae',
        500: '#626576',
        400: '#838695',
        700: '#383B45',
      },
      solid_primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        400: '#60a5fa',
        500: '#3b82f6',
      },
      solid_error: {
        700: '#A9122B',
      },
      solid_mint: {
        50: '#00C7BE',
      },
      contrastThreshold: 4.5,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      // tonalOffset: 0.2
      gradient: {
        main: 'linear-gradient(to right, #00c7be, #3182f7)',
        mainChannel: '0 0 0',
      },
    } as any,
    typography: {
      allVariants: {
        fontFamily: ['Pretendard', 'sans-serif'].join(','),
        fontWeight: 400,
        color: '#090a0b',
        letterSpacing: 0,
        fontSize: convertToRem(14),
        lineHeight: convertToRem(20),
        textTransform: 'none',
      },
      text_xs_regular: {
        fontSize: convertToRem(12),
        lineHeight: convertToRem(18),
        fontWeight: 400,
      },
      text_sm_regular: {
        fontSize: convertToRem(14),
        lineHeight: convertToRem(20),
        fontWeight: 400,
      },
      text_sm_medium: {
        fontSize: convertToRem(14),
        lineHeight: convertToRem(20),
        fontWeight: 500,
      },
      text_md_regular: {
        fontSize: convertToRem(16),
        lineHeight: convertToRem(24),
        fontWeight: 400,
      },
      h0: {
        fontSize: convertToRem(24),
        lineHeight: 160,
        fontWeight: 700,
        fontFamily: ['Pretendard'],
      },
      h1: {
        fontSize: convertToRem(31),
        lineHeight: convertToRem(44),
        fontWeight: 700,
        fontFamily: ['Pretendard', 'sans-serif'].join(','),
        marginTop: convertToRem(32),
        marginBottom: convertToRem(34),
      },
      h2: {
        fontSize: convertToRem(20),
        lineHeight: convertToRem(30),
        fontWeight: 700,
        fontFamily: ['Pretendard', 'sans-serif'].join(','),
        letterSpacing: '-0.1px',
      },
      sub_title_20: {
        fontSize: convertToRem(14),
        lineHeight: convertToRem(120) + '%',
        fontWeight: 600,
        fontFamily: ['Pretendard', 'sans-serif'].join(','),
        letterSpacing: 0,
      },
      body_20: {
        fontSize: convertToRem(14),
        lineHeight: convertToRem(120) + '%',
        fontWeight: 400,
        fontFamily: ['Pretendard', 'sans-serif'].join(','),
        letterSpacing: 0,
      },
    } as any,
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      } as any,
    },
    transitions: {
      // Define transitions here
    },
    shadows: [
      'none',
      '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      '0px 4px 6px -2px rgba(16, 24, 40, 0.02), 0px 12px 20px -4px rgba(96, 115, 152, 0.08)',
      '0px 6px 8px -2px rgba(16, 24, 40, 0.04), 0px 14px 28px -5px rgba(96, 115, 152, 0.16)',
      ...Array(23).fill('none'),
    ] as Shadows,
  },
  koKR,
)

export default theme
