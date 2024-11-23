import { ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import { CHARTS } from './charts/charts.tsx'
import { ChartsLinks } from './components/ChartsLinks.tsx'
import { ModeLayout } from './components/ModeLayout.tsx'
import { theme } from './config/mui.ts'
import { queryClient } from './config/react-query.ts'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<ChartsLinks />} />
              <Route path="/:mode" element={<ModeLayout />}>
                {CHARTS.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
