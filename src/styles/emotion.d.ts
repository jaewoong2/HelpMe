import '@emotion/react';
import { defaultTheme } from '@styles';

declare module '@emotion/react' {
    export interface Theme {
        color: { [color in keyof typeof defaultTheme]: string };
    }
}