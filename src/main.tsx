import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.module.css';
import Theme from './shared/lib/theme/ThemeProvider';
import './shared/lib/theme/theme.module.css';

import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
)
