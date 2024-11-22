import { HIMYM_EpisodesScore } from './HIMYM_EpisodesScore.tsx'
import { Migrane_Attacks } from './Migrane_Attacks.tsx'

export const CHARTS = [
  {
    path: '/how-i-met-your-mother/episodes-score',
    element: <HIMYM_EpisodesScore />,
  },
  {
    path: '/migrane/attacks',
    element: <Migrane_Attacks />,
  },
]
