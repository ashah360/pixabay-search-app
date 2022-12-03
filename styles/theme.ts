import type { DefaultTheme } from 'styled-components';

export type VisualizationColor = keyof DefaultTheme['color']['visualization'];

export function getVisualizationColor(color: VisualizationColor) {
  return defaultTheme.color.visualization[color];
}

const BASE_STYLES = {
  spacing: {
    xxSmall: 4,
    xSmall: 8,
    small: 12,
    medium: 16,
    large: 24,
    xLarge: 32,
    xxLarge: 48,
  },
  font: {
    sizing: {
      xxSmall: 9,
      xSmall: 10,
      small: 11,
      medium: 12,
      large: 14,
      xLarge: 16,
      xxLarge: 18,
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      heavy: 800,
    },
  },
};

export const defaultTheme: DefaultTheme = {
  spacing: {
    ...BASE_STYLES.spacing,
  },
  font: {
    sizing: {
      ...BASE_STYLES.font.sizing,
    },
    weight: {
      ...BASE_STYLES.font.weight,
    },
  },
  color: {
    surface: {
      primary: {
        idle: 'rgb(9, 10, 11);',
      },
      secondary: {
        idle: 'hsla(0, 0%, 100%, 5%)',
        hover: '#1E2032',
        active: '#1E2032',
      },
      tertiary: {
        idle: '#1D1F31',
        hover: 'hsl(234, 26%, 17%)',
        active: 'hsl(234, 26%, 20%)',
      },
      quaternary: {
        idle: '#1E2033',
        hover: '#212339',
      },
      quinary: {
        idle: '#222439',
      },
      senary: {
        idle: '#212339',
      },
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgb(153, 153, 153)',
      tertiary: '#737AAE',
      error: '#D56F72',
    },
    border: {
      primary: {
        idle: 'hsla(0, 0%, 100%, 8%)',
        hover: 'hsl(236, 25%, 25%)',
      },
      secondary: {
        idle: 'rgb(153, 153, 153)',
        hover: 'hsl(233, 25%, 33%)',
      },
      tertiary: {
        idle: '#2C2E47',
      },
    },
    input: {
      background: 'hsla(0, 0%, 100%, 10%)',
      border: {
        idle: 'hsla(0, 0%, 100%, 15%)',
        hover: '#2C2E43',
        error: '#D56F72',
      },
      placeholder: '#2C2E43',
    },
    visualization: {
      red: '#F56565',
      orange: '#FFB86C',
      green: '#48BB78',
      blue: '#6B9FFF',
      blurple: '#778BEB',
      purple: '#9F7AEA',
      grey: '#A3A8D2',
      darkGrey: '#737AAE',
      darkRed: '#D56F72',
    },
  },
};
