import { APIResponseError } from '@notionhq/client'
import { notion } from '../utils/client.mjs'

export default async () => {
  try {
    const users = await notion.users.list({}).then((res) => res.results)
    const user_id = users.find((u) => u.type === 'person')?.id as string
    const user = await notion.users.retrieve({ user_id })

    return new Response(JSON.stringify(user), {
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
