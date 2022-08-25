import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { NoteProvider } from './contexts/NoteContext';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <NoteProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
