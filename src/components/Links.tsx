import { CHARTS } from '../charts/charts.tsx'

export const Links = () => (
  <ul>
    {CHARTS.map(({ path }) => (
      <li>
        <a key={path} href={path}>
          {path}
        </a>
      </li>
    ))}
  </ul>
)
