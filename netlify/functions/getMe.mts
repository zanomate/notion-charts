import { APIResponseError } from '@notionhq/client'
import { notion } from '../utils/client.mjs'

export default async () => {
  try {
    const res = await notion.users.me({})
    return new Response(JSON.stringify(res), {
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
