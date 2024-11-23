import { APIResponseError, iteratePaginatedAPI } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { notion } from '../utils/client.mjs'

export default async (req: Request) => {
  try {
    const args = await req.json()
    const allResults: QueryDatabaseResponse['results'] = []
    // @ts-ignore
    for await (const result of iteratePaginatedAPI<DatabaseArgs, DB_ITEM>(notion.databases.query, args)) {
      allResults.push(result)
    }
    return new Response(JSON.stringify(allResults), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    })
  } catch (error) {
    if (error instanceof APIResponseError) {
      return new Response(error.body, {
        status: error.status,
      })
    }
    return new Response(JSON.stringify(error), {
      status: 500,
    })
  }
}
