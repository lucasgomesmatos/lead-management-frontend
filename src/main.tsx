import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Provider } from './components/providers/provider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
