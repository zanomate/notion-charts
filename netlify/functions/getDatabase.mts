import { Client, iteratePaginatedAPI } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  baseUrl: 'https://api.notion.com/v1/databases',
  auth: process.env.PUBLIC_NOTION_TOKEN,
})

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
    return new Response(JSON.stringify(error), {
      status: 500,
    })
  }
}
