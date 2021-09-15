import React, { ReactNode } from 'react';
import { MediQ, MediQInput } from '@medi-q/core';
import { MediQProvider } from '@medi-q/react';
import { ThemeProvider as EmotionThemeProvider, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mediQ: MediQ;
  }
}

export type ThemeProviderProps = {
  theme: Omit<DefaultTheme, 'mediQ'>;
  mediQ: MediQ;
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  mediQ,
  theme,
  children,
}) => {
  return (
    <MediQProvider mediQ={mediQ}>
      <EmotionThemeProvider theme={{ ...theme, mediQ: (input: MediQInput) => `@media ${mediQ(input)}` }}>
        {children}
      </EmotionThemeProvider>
    </MediQProvider>
  );
};
