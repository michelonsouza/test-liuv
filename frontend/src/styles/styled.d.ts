import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      componentBackground: string;
      primary: string;
      success: string;
      warning: string;
      text: string;
      whiteText: string;

      boxShadow: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      lg: string;
    };
    metrics: {
      baseHeight: number;
      baseRadius: number;
    };
  }
}
