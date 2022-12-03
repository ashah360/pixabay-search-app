// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      xxSmall: number;
      xSmall: number;
      small: number;
      medium: number;
      large: number;
      xLarge: number;
      xxLarge: number;
    };
    font: {
      sizing: {
        xxSmall: number;
        xSmall: number;
        small: number;
        medium: number;
        large: number;
        xLarge: number;
        xxLarge: number;
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        heavy: number;
      };
    };
    color: {
      surface: {
        primary: {
          idle: string;
        };
        secondary: {
          idle: string;
          hover: string;
          active: string;
        };
        tertiary: {
          idle: string;
          hover: string;
          active: string;
        };
        quaternary: {
          idle: string;
          hover: string;
        };
        quinary: {
          idle: string;
        };
        senary: {
          idle: string;
        };
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        error: string;
      };
      border: {
        primary: {
          idle: string;
          hover: string;
          // active: string;
          // subtle: string;
        };
        secondary: {
          idle: string;
          hover: string;
          // active: string;
          // subtle: string;
        };
        tertiary: {
          idle: string;
        };
      };
      input: {
        background: string;
        border: {
          idle: string;
          error: string;
          hover: string;
          // active: string;
        };
        placeholder: string;
      };
      visualization: {
        red: string;
        orange: string;
        green: string;
        blue: string;
        blurple: string;
        purple: string;
        grey: string;
        darkGrey: string;
        darkRed: string;
      };
    };
  }
}
