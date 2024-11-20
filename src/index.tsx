import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CHARTS } from './charts/charts.tsx'
import { Links } from './components/Links.tsx'
import './index.css'
import { queryClient } from './config/react-query.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Links />,
  },
  ...CHARTS,
])

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}