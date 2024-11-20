import { Bar, BarChart, CartesianGrid, Label, LabelList, Legend, XAxis, YAxis } from 'recharts'
import { useDatabase } from '../config/notion.ts'
import { Score } from '../types/Score.ts'
import { labelFormatter } from '../utils/recharts.ts'

interface ChartItem {
  season: number
  bad: number
  ok: number
  great: number
  awesome: number
}

export const HIMYM_EpisodesScore = () => {
  const { isFetching, data } = useDatabase<ChartItem>(
    process.env.PUBLIC_HIMYM_DB_ID as string,
    {},
    {
      select: (data) => {
        const res: ChartItem[] = [
          { season: 1, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 2, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 3, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 4, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 5, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 6, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 7, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 8, bad: 0, ok: 0, great: 0, awesome: 0 },
          { season: 9, bad: 0, ok: 0, great: 0, awesome: 0 },
        ]
        data.forEach((i) => {
          // @ts-ignore
          const season = parseInt(i.properties.Name.title[0].text.content.split('x')[0])
          // @ts-ignore
          const score = i.properties.Score.select?.name
          if (score === Score.BAD) res[season - 1].bad++
          if (score === Score.OK) res[season - 1].ok++
          if (score === Score.GREAT) res[season - 1].great++
          if (score === Score.AWESOME) res[season - 1].awesome++
        })
        return res
      },
    },
  )

  if (isFetching) return <div>Loading...</div>

  return (
    <BarChart width={700} height={500} barSize={50} data={data}>
      <Legend verticalAlign="top" height={36} />
      <CartesianGrid />
      <XAxis dataKey="season">
        <Label value="Seasons" offset={-5} position="insideBottom" />
      </XAxis>
      <YAxis ticks={[24]}>
        <Label value="Episodes" offset={10} position="middle" angle={-90} />
      </YAxis>
      <Bar dataKey="awesome" stackId="a" fill="#1ea853">
        <LabelList dataKey="awesome" position="inside" fill="white" formatter={labelFormatter} />
      </Bar>
      <Bar dataKey="great" stackId="a" fill="#2ee067">
        <LabelList dataKey="great" position="inside" fill="white" formatter={labelFormatter} />
      </Bar>
      <Bar dataKey="ok" stackId="a" fill="#ddd20e">
        <LabelList dataKey="ok" position="inside" fill="white" formatter={labelFormatter} />
      </Bar>
      <Bar dataKey="bad" stackId="a" fill="#fa727c">
        <LabelList dataKey="bad" position="inside" fill="white" formatter={labelFormatter} />
      </Bar>
    </BarChart>
  )
}
