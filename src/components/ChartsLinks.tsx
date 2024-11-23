import { CHARTS } from '../charts/charts.tsx'

export const ChartsLinks = () => (
  <ul>
    {CHARTS.map(({ path }) => (
      <li key={path}>
        <a key={path} href={`/system/${path}`}>
          {path}
        </a>
      </li>
    ))}
  </ul>
)
