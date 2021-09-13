import React, { ReactNode } from 'react';
import { MediQ } from '@medi-q/core';
import { MediQProvider } from '@medi-q/react';
import { ThemeProvider as EmotionThemeProvider, Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mediQ: MediQ;
  }
}

export type ThemeProviderProps = {
  theme: Omit<Theme, 'mediQ'>;
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
      <EmotionThemeProvider theme={{ ...theme, mediQ: args => `@media ${mediQ(args)}` }}>
        {children}
      </EmotionThemeProvider>
    </MediQProvider>
  );
};
