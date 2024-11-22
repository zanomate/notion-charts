import moment from 'moment'
import { Bar, CartesianGrid, ComposedChart, Label, LabelList, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Loader } from '../components/Loader.tsx'
import { Drug } from '../types/Drug.ts'
import { labelFormatter } from '../utils/recharts.ts'
import { useDatabase } from '../utils/useDatabase.ts'

interface ChartItem {
  month: string // YYYY-MM
  attacks: number
  drug_fans: number // oki
  drug_fans_strong: number // indoxen, difmetre
  drug_triptan: number // almogran, relpax
  drug_other: number // tachipirina
}

export const Migrane_Attacks = () => {
  const { isFetching, data } = useDatabase<ChartItem>(
    process.env.PUBLIC_MIGRANE_DB_ID as string,
    {},
    {
      select: (data) => {
        const res: { [month: string]: ChartItem } = {}
        data.forEach((i) => {
          // @ts-ignore
          const month = moment(i.properties.Date.date.start).format('YYYY-MM')
          if (!res[month]) {
            res[month] = {
              month,
              attacks: 0,
              drug_fans: 0,
              drug_fans_strong: 0,
              drug_triptan: 0,
              drug_other: 0,
            }
          }
          res[month].attacks++
          // @ts-ignore
          i.properties.Drugs.multi_select.forEach((d) => {
            if ([Drug.OKI].includes(d.name)) res[month].drug_fans++
            if ([Drug.INDOXEN, Drug.DIFMETRE].includes(d.name)) res[month].drug_fans_strong++
            if ([Drug.ALMOGRAN, Drug.RELPAX_1, Drug.RELPAX_2].includes(d.name)) res[month].drug_triptan++
            if (d.name === Drug.RELPAX_05) res[month].drug_triptan += 0.5
            if ([Drug.TACHIPIRINA].includes(d.name)) res[month].drug_other++
          })
        })
        return Object.values(res)
      },
    },
  )

  if (isFetching) return <Loader />

  return (
    <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'hidden' }}>
      <ComposedChart margin={{ top: 48, left: 48, right: 48, bottom: 48 }} data={data}>
        <Legend verticalAlign="top" height={36} />
        <CartesianGrid />
        <XAxis dataKey="season">
          <Label value="TTme" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis ticks={[24]}>
          <Label value="Attacks and Drugs" offset={10} position="middle" angle={-90} />
        </YAxis>
        <Bar dataKey="attacks" fill="#1ea853">
          <LabelList dataKey="attacks" position="inside" fill="white" formatter={labelFormatter} />
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  )
}
