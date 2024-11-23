import { useColorScheme } from '@mui/material'
import { Mode } from '@mui/system/cssVars/useCurrentColorScheme'
import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router'

export const ModeLayout = () => {
  const { mode } = useParams<{ mode: Mode }>()
  const { setMode } = useColorScheme()

  useEffect(() => {
    setMode(mode as Mode)
  }, [mode])

  return <Outlet />
}
