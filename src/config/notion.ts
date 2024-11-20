import { Client, iteratePaginatedAPI } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const notion = new Client({
  baseUrl: 'https://api.notion.com/v1/databases',
  // baseUrl: 'http://localhost:3000',
  auth: process.env.PUBLIC_NOTION_TOKEN,
})

type DatabaseArgs = Parameters<typeof notion.databases.query>[0]

export const useDatabase = <CHART_ITEM>(
  id: string,
  args: Omit<DatabaseArgs, 'database_id'>,
  options: Partial<UseQueryOptions<QueryDatabaseResponse['results'], unknown, CHART_ITEM[]>>,
) => {
  return useQuery({
    queryKey: [id, JSON.stringify(args)],
    queryFn: async () => {
      const res: QueryDatabaseResponse['results'] = []
      // @ts-ignore
      for await (const page of iteratePaginatedAPI<DatabaseArgs, DB_ITEM>(notion.databases.query, {
        database_id: id,
        ...args,
      })) {
        res.push(page)
      }
      return res
    },
    ...options,
  })
}
