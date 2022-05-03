import '@emotion/react';
import { defaultTheme } from '@styles/index';

declare module '@emotion/react' {
    export interface Theme {
        color: { [color in keyof typeof defaultTheme["color"]]: string };
    }
}