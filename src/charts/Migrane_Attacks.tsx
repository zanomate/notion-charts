import { useTheme } from '@mui/material'
import moment from 'moment'
import { Bar, CartesianGrid, ComposedChart, Label, LabelList, Legend, Line, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts'
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
  const { palette } = useTheme()

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
          const drugs = i.properties.Drugs.multi_select.map((d) => d.name) as Drugs[]
          drugs.forEach((drug) => {
            if ([Drug.OKI].includes(drug as Drug)) res[month].drug_fans++
            if ([Drug.INDOXEN, Drug.DIFMETRE].includes(drug as Drug)) res[month].drug_fans_strong++
            if ([Drug.ALMOGRAN, Drug.RELPAX_1, Drug.RELPAX_2].includes(drug as Drug)) res[month].drug_triptan++
            if (drug === Drug.RELPAX_05) res[month].drug_triptan += 0.5
            if ([Drug.TACHIPIRINA].includes(drug as Drug)) res[month].drug_other++
          })
        })
        return Object.values(res).sort((a, b) => a.month.localeCompare(b.month))
      },
    },
  )

  if (isFetching) return <Loader />

  return (
    <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'hidden' }}>
      <ComposedChart margin={{ top: 48, left: 48, right: 48, bottom: 48 }} data={data}>
        <Legend verticalAlign="top" height={36} />
        <CartesianGrid />
        <XAxis dataKey="month" tickFormatter={(val) => moment(val, 'YYYY-MM').format('MMM YY')} />
        <YAxis ticks={[5, 10, 15]}>
          <Label value="Attacks and Drugs" offset={10} position="middle" angle={-90} />
        </YAxis>
        <Bar dataKey="attacks" fill={palette.text.disabled}>
          <LabelList dataKey="attacks" position="insideTop" offset={10} fill={palette.text.primary} formatter={labelFormatter} />
        </Bar>
        {/*<Area type="monotone" dataKey="attacks" fill={palette.text.disabled} />*/}
        <Line dataKey="drug_fans" stroke={palette.info.main} strokeWidth={3} />
        <Line dataKey="drug_fans_strong" stroke={palette.warning.main} strokeWidth={3} />
        <Line dataKey="drug_triptan" stroke={palette.error.main} strokeWidth={3} />

        <ReferenceLine
          x="2024-05"
          stroke="purple"
          label={{
            position: 'insideTopRight',
            offset: 20,
            value: 'Terapia monoclonale',
            fill: palette.text.primary,
            angle: -90,
          }}
          strokeWidth={3}
          strokeDasharray={5}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
