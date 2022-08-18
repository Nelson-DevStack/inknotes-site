import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { NoteProvider } from './contexts/NoteContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
