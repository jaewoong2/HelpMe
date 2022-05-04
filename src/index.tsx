import { ServiceProvider } from '@context/serviceContext';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defaultTheme } from './styles';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ServiceProvider>
        <App />
      </ServiceProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
