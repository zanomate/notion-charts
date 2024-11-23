import { Client } from '@notionhq/client'

export const notion = new Client({
  baseUrl: 'https://api.notion.com',
  auth: process.env.PUBLIC_NOTION_TOKEN,
})
