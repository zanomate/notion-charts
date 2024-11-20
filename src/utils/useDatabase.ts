import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useDatabase = <CHART_ITEM>(
  id: string,
  args: object,
  options: Partial<UseQueryOptions<QueryDatabaseResponse['results'], unknown, CHART_ITEM[]>>,
) => {
  return useQuery({
    queryKey: [id, JSON.stringify(args)],
    queryFn: async () =>
      fetch('/.netlify/functions/getDatabase', {
        body: JSON.stringify({
          database_id: id,
          ...args,
        }),
      }).then((res) => res.json()),
    ...options,
  })
}