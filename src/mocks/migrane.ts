import moment from 'moment/moment'
import { ChartItem } from '../charts/Migrane_Attacks.tsx'
import { Drug } from '../types/Drug.ts'

const data = [
  {
    object: 'page',
    id: '14652b48-2cca-8055-a10e-e89dd95666f2',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-6-14652b482cca8055a10ee89dd95666f2',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80af-8331-efbdd5c43c2a',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-09',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-5-14652b482cca80af8331efbdd5c43c2a',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8018-b548-d191b20335be',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-08',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-4-14652b482cca8018b548d191b20335be',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80f2-acaf-daac312dec3d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-02',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-3-14652b482cca80f2acafdaac312dec3d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8074-a1d7-e05de5bcfb1d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-02',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-2-14652b482cca8074a1d7e05de5bcfb1d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-807f-92ba-e81d748a0a66',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-11-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-1-14652b482cca807f92bae81d748a0a66',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-805f-8a7c-c8f86d81559d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-31',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #11',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #11',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-11-14652b482cca805f8a7cc8f86d81559d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8043-9d52-f4435e963fa0',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-28',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #10',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #10',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-10-14652b482cca80439d52f4435e963fa0',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8032-968e-f16ad546982e',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-25',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #9',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #9',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-9-14652b482cca8032968ef16ad546982e',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8028-9960-f2e43642fb2b',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-15',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-8-14652b482cca80289960f2e43642fb2b',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80cc-b212-e103f5a1f5b3',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-13',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-7-14652b482cca80ccb212e103f5a1f5b3',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80e6-b85d-cb6151a58dfe',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-6-14652b482cca80e6b85dcb6151a58dfe',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8004-a133-ea80636df18b',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-08',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-5-14652b482cca8004a133ea80636df18b',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-800b-9809-f2aeec204c34',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'gdNp',
            name: 'Tachipirina',
            color: 'gray',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-07',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-4-14652b482cca800b9809f2aeec204c34',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-808c-9e3b-d8be7af72092',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-3-14652b482cca808c9e3bd8be7af72092',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8036-980d-f325ca803db3',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-03',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-2-14652b482cca8036980df325ca803db3',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80f5-b278-ffb08a160a11',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-10-02',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-1-14652b482cca80f5b278ffb08a160a11',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80fd-a9d4-e639f5e1e689',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-30',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-8-14652b482cca80fda9d4e639f5e1e689',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-800b-930b-c67aee81ec59',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'oFdq',
            name: 'Oki (secondo)',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-21',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-7-14652b482cca800b930bc67aee81ec59',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8057-b8ec-c174d04a9b08',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-20',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-6-14652b482cca8057b8ecc174d04a9b08',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8044-b953-e9e93f20cbbb',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-19',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-5-14652b482cca8044b953e9e93f20cbbb',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80d6-90c6-c819008a5674',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-14',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-4-14652b482cca80d690c6c819008a5674',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-803f-9641-dd3d9c537270',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-13',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-3-14652b482cca803f9641dd3d9c537270',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8036-8ec2-de3bbe65398a',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-05',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-2-14652b482cca80368ec2de3bbe65398a',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80a6-926d-cd5ac0ca761a',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-09-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-1-14652b482cca80a6926dcd5ac0ca761a',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-808e-bd4f-d092a770e4ff',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-31',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #10',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #10',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-10-14652b482cca808ebd4fd092a770e4ff',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80e1-b6c3-c31779c01bfa',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-30',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #9',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #9',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-9-14652b482cca80e1b6c3c31779c01bfa',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80b3-acc1-d99457651b6f',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-28',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-8-14652b482cca80b3acc1d99457651b6f',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-808f-8936-ef7dbca218a0',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:01:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'oFdq',
            name: 'Oki (secondo)',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-25',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-7-14652b482cca808f8936ef7dbca218a0',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8092-9337-fe7af47ab45d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-24',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-6-14652b482cca80929337fe7af47ab45d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80e1-b98f-f76f2a061d8b',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-5-14652b482cca80e1b98ff76f2a061d8b',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80f5-9472-cd569c07739d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-19',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-4-14652b482cca80f59472cd569c07739d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-801d-8003-f8e249f53f61',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-15',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-3-14652b482cca801d8003f8e249f53f61',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80fe-8219-e2a0114f856d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
          {
            id: '?Tci',
            name: 'Relpax (secondo)',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-08-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-1-14652b482cca80fe8219e2a0114f856d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8080-b29d-c00b587af573',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-29',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-7-14652b482cca8080b29dc00b587af573',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8063-924e-c5403185670d',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-23',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-6-14652b482cca8063924ec5403185670d',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8032-88ce-e28e38ccb032',
    created_time: '2024-11-22T09:53:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-5-14652b482cca803288cee28e38ccb032',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8058-8692-ec5980882819',
    created_time: '2024-11-22T09:52:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
          {
            id: '?Tci',
            name: 'Relpax (secondo)',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-15',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-4-14652b482cca80588692ec5980882819',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8055-9ba4-f17989f00bd2',
    created_time: '2024-11-22T09:52:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-3-14652b482cca80559ba4f17989f00bd2',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80f5-aabc-da9defb62aed',
    created_time: '2024-11-22T09:52:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-07',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-2-14652b482cca80f5aabcda9defb62aed',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-807b-861a-dc25c4f01134',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-07-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-1-14652b482cca807b861adc25c4f01134',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8043-af2f-c7686a337fb0',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T10:00:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-28',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #11',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #11',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-11-14652b482cca8043af2fc7686a337fb0',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80af-a10b-e6779879c9c5',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-23',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #10',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #10',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-10-14652b482cca80afa10be6779879c9c5',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80a3-ba8a-ef26733e84ba',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-20',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #9',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #9',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-9-14652b482cca80a3ba8aef26733e84ba',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80cd-a2f0-c47da2d725cf',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'Om:s',
            name: 'Relpax (mezzo)',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-18',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-8-14652b482cca80cda2f0c47da2d725cf',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8057-a29d-e8c197f00a08',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-15',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-7-14652b482cca8057a29de8c197f00a08',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80a6-9c91-d823f443b319',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-6-14652b482cca80a69c91d823f443b319',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80be-8ac3-ebf3ad07bdc3',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-10',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-5-14652b482cca80be8ac3ebf3ad07bdc3',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-805c-846f-ddb5d487efcc',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-06',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-4-14652b482cca805c846fddb5d487efcc',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80f3-9fc7-f29230fbd5f6',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-3-14652b482cca80f39fc7f29230fbd5f6',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-806d-a9ed-c26143d8d9f8',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-03',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-2-14652b482cca806da9edc26143d8d9f8',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80b4-9f1a-e94fbea4a2f7',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-06-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno #1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno #1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-1-14652b482cca80b49f1ae94fbea4a2f7',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80c8-b6a6-c115ec0e949b',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-29',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #8 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #8 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-8-2-14652b482cca80c8b6a6c115ec0e949b',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80dd-a49d-cb12460788ab',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
          {
            id: '?Tci',
            name: 'Relpax (secondo)',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-28',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-8-14652b482cca80dda49dcb12460788ab',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8015-84e8-d746f8a03b3c',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-7-14652b482cca801584e8d746f8a03b3c',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-803b-be6a-db2709969eef',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-20',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-6-14652b482cca803bbe6adb2709969eef',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-807d-8509-ed6a1867dda2',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-19',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-5-14652b482cca807d8509ed6a1867dda2',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80cf-b0e6-ed89a4c4e3ac',
    created_time: '2024-11-22T09:50:00.000Z',
    last_edited_time: '2024-11-22T09:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-4-14652b482cca80cfb0e6ed89a4c4e3ac',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-8004-bfe4-e639c17d32d5',
    created_time: '2024-11-22T09:49:00.000Z',
    last_edited_time: '2024-11-22T09:59:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2023-05-10',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio #3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio #3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-3-14652b482cca8004bfe4e639c17d32d5',
    public_url: null,
  },
  {
    object: 'page',
    id: '14652b48-2cca-80ca-a243-e57203ec5e73',
    created_time: '2024-11-22T07:24:00.000Z',
    last_edited_time: '2024-11-22T07:24:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-11-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre 5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre 5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-5-14652b482cca80caa243e57203ec5e73',
    public_url: null,
  },
  {
    object: 'page',
    id: '14052b48-2cca-809f-81dc-faea5381e110',
    created_time: '2024-11-16T06:54:00.000Z',
    last_edited_time: '2024-11-16T06:54:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-11-16',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-4-14052b482cca809f81dcfaea5381e110',
    public_url: null,
  },
  {
    object: 'page',
    id: '13c52b48-2cca-802a-b8b0-d0495c5fc9bd',
    created_time: '2024-11-12T07:16:00.000Z',
    last_edited_time: '2024-11-13T07:28:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-11-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Mi viene la sera e mi passa la mattina',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Mi viene la sera e mi passa la mattina',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-3-13c52b482cca802ab8b0d0495c5fc9bd',
    public_url: null,
  },
  {
    object: 'page',
    id: '13c52b48-2cca-805f-820d-f13f1124e65b',
    created_time: '2024-11-12T07:15:00.000Z',
    last_edited_time: '2024-11-13T07:28:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-11-07',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Mi viene la sera e mi passa la mattina',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Mi viene la sera e mi passa la mattina',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-2-13c52b482cca805f820df13f1124e65b',
    public_url: null,
  },
  {
    object: 'page',
    id: '13652b48-2cca-8033-a755-d5d936044ba0',
    created_time: '2024-11-06T07:57:00.000Z',
    last_edited_time: '2024-11-12T07:16:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-11-06',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Novembre 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Novembre 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Novembre-1-13652b482cca8033a755d5d936044ba0',
    public_url: null,
  },
  {
    object: 'page',
    id: '12c52b48-2cca-806f-83d7-c0d8e0c2ec3b',
    created_time: '2024-10-27T13:36:00.000Z',
    last_edited_time: '2024-10-27T13:36:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-10-26',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-4-12c52b482cca806f83d7c0d8e0c2ec3b',
    public_url: null,
  },
  {
    object: 'page',
    id: '12052b48-2cca-809b-8ba2-dcee661fdc6d',
    created_time: '2024-10-15T22:56:00.000Z',
    last_edited_time: '2024-10-15T22:57:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-10-15',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-3-12052b482cca809b8ba2dcee661fdc6d',
    public_url: null,
  },
  {
    object: 'page',
    id: '11552b48-2cca-80b2-8c86-c59c0a7f34d0',
    created_time: '2024-10-04T05:39:00.000Z',
    last_edited_time: '2024-10-04T05:39:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-10-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-2-11552b482cca80b28c86c59c0a7f34d0',
    public_url: null,
  },
  {
    object: 'page',
    id: '11552b48-2cca-8043-b0c9-c829efbc18fd',
    created_time: '2024-10-04T05:39:00.000Z',
    last_edited_time: '2024-10-04T05:39:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-10-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Ottobre 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Ottobre 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Ottobre-1-11552b482cca8043b0c9c829efbc18fd',
    public_url: null,
  },
  {
    object: 'page',
    id: '10e52b48-2cca-80c6-ad2a-c2981170718d',
    created_time: '2024-09-27T06:02:00.000Z',
    last_edited_time: '2024-09-27T06:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-09-27',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-2-10e52b482cca80c6ad2ac2981170718d',
    public_url: null,
  },
  {
    object: 'page',
    id: '10a52b48-2cca-80fc-a2a8-e8cde70254fa',
    created_time: '2024-09-23T19:11:00.000Z',
    last_edited_time: '2024-09-23T19:11:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-09-23',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Settembre 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Settembre 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Settembre-1-10a52b482cca80fca2a8e8cde70254fa',
    public_url: null,
  },
  {
    object: 'page',
    id: '1d60b8a3-0cd9-4d04-8f9f-1df28bfbb00f',
    created_time: '2024-08-17T09:03:00.000Z',
    last_edited_time: '2024-08-17T09:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-17',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-6-1d60b8a30cd94d048f9f1df28bfbb00f',
    public_url: null,
  },
  {
    object: 'page',
    id: 'e53455c0-9a71-4071-80c2-a42978298511',
    created_time: '2024-08-17T09:03:00.000Z',
    last_edited_time: '2024-08-17T09:03:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-16',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-5-e53455c09a71407180c2a42978298511',
    public_url: null,
  },
  {
    object: 'page',
    id: '0ad059fe-c1c8-4ca2-8462-bb4511f4498e',
    created_time: '2024-08-10T14:18:00.000Z',
    last_edited_time: '2024-08-10T14:18:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-10',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-4-0ad059fec1c84ca28462bb4511f4498e',
    public_url: null,
  },
  {
    object: 'page',
    id: '341c878f-4696-463b-abde-e141fe22f18b',
    created_time: '2024-08-09T10:43:00.000Z',
    last_edited_time: '2024-08-09T10:43:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-09',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-3-341c878f4696463babdee141fe22f18b',
    public_url: null,
  },
  {
    object: 'page',
    id: 'bb5a70ed-5b06-4e47-8d5c-f3d7b53ba0c2',
    created_time: '2024-08-07T13:29:00.000Z',
    last_edited_time: '2024-08-09T10:43:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-07',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-2-bb5a70ed5b064e478d5cf3d7b53ba0c2',
    public_url: null,
  },
  {
    object: 'page',
    id: '45dff2bc-c5aa-42e0-b726-50441a2ce528',
    created_time: '2024-08-07T13:29:00.000Z',
    last_edited_time: '2024-08-09T10:44:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-08-05',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Agosto 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Agosto 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Agosto-1-45dff2bcc5aa42e0b72650441a2ce528',
    public_url: null,
  },
  {
    object: 'page',
    id: 'db0d3b52-3167-456f-a9a1-2dc4fdb5a299',
    created_time: '2024-07-31T19:51:00.000Z',
    last_edited_time: '2024-07-31T19:51:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-07-31',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-3-db0d3b523167456fa9a12dc4fdb5a299',
    public_url: null,
  },
  {
    object: 'page',
    id: '5e0499c1-2b93-45b8-a74c-8a4041a9c89c',
    created_time: '2024-07-27T13:39:00.000Z',
    last_edited_time: '2024-07-27T13:39:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-07-27',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: '(Luglio 2)',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '(Luglio 2)',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-2-5e0499c12b9345b8a74c8a4041a9c89c',
    public_url: null,
  },
  {
    object: 'page',
    id: '35c598a9-7ab8-451a-9adc-71c35184f808',
    created_time: '2024-07-20T09:28:00.000Z',
    last_edited_time: '2024-07-20T09:29:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-07-20',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Covid. Tosse tutta notte e dormito male',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Covid. Tosse tutta notte e dormito male',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Luglio 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Luglio 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Luglio-1-35c598a97ab8451a9adc71c35184f808',
    public_url: null,
  },
  {
    object: 'page',
    id: 'b4d11744-b820-49ec-9ef7-e0d842a742bc',
    created_time: '2024-07-12T11:02:00.000Z',
    last_edited_time: '2024-07-20T09:30:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-07-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Molto stanco. Passato in meno di mezzora',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Molto stanco. Passato in meno di mezzora',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: '(Giugno 6)',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '(Giugno 6)',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-6-b4d11744b82049ec9ef7e0d842a742bc',
    public_url: null,
  },
  {
    object: 'page',
    id: 'ea463cf2-e10a-433f-b7b4-17e1f45eabc0',
    created_time: '2024-06-28T12:16:00.000Z',
    last_edited_time: '2024-09-12T05:31:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-06-27',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Stanco. Passato facilmente',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Stanco. Passato facilmente',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: '(Giugno 5)',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '(Giugno 5)',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-5-ea463cf2e10a433fb7b417e1f45eabc0',
    public_url: null,
  },
  {
    object: 'page',
    id: '81690cec-04d9-4667-a35e-a54a02d7f2e8',
    created_time: '2024-06-27T06:58:00.000Z',
    last_edited_time: '2024-07-20T09:31:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-06-26',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Non del solito tipo',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Non del solito tipo',
            href: null,
          },
        ],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-4-81690cec04d94667a35ea54a02d7f2e8',
    public_url: null,
  },
  {
    object: 'page',
    id: '045e52a4-098f-45cd-afea-c5d60dd264c0',
    created_time: '2024-06-10T05:40:00.000Z',
    last_edited_time: '2024-06-10T05:40:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-06-09',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-3-045e52a4098f45cdafeac5d60dd264c0',
    public_url: null,
  },
  {
    object: 'page',
    id: 'd730cd93-3c3f-47af-a1dd-1455305beaaf',
    created_time: '2024-06-10T05:39:00.000Z',
    last_edited_time: '2024-06-10T05:40:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-06-08',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-2-d730cd933c3f47afa1dd1455305beaaf',
    public_url: null,
  },
  {
    object: 'page',
    id: 'f680034b-2fa7-410e-99b5-71d49a070df3',
    created_time: '2024-06-04T05:57:00.000Z',
    last_edited_time: '2024-06-04T05:57:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-06-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Giugno 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Giugno 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Giugno-1-f680034b2fa7410e99b571d49a070df3',
    public_url: null,
  },
  {
    object: 'page',
    id: 'fe3b3339-4cfe-44ea-a200-6955fd761753',
    created_time: '2024-05-29T07:56:00.000Z',
    last_edited_time: '2024-11-22T09:58:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-05-29',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-4-fe3b33394cfe44eaa2006955fd761753',
    public_url: null,
  },
  {
    object: 'page',
    id: '733048f8-6a08-459d-800e-f62d57f1a61e',
    created_time: '2024-05-27T05:37:00.000Z',
    last_edited_time: '2024-05-27T05:37:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-05-26',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-3-733048f86a08459d800ef62d57f1a61e',
    public_url: null,
  },
  {
    object: 'page',
    id: '6fac5e0b-741f-4795-9ef5-6b6af75ef0fa',
    created_time: '2024-05-12T09:19:00.000Z',
    last_edited_time: '2024-05-12T09:20:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-05-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-2-6fac5e0b741f47959ef56b6af75ef0fa',
    public_url: null,
  },
  {
    object: 'page',
    id: '5e580f65-cc5e-4704-9582-bca6eb1e2bd6',
    created_time: '2024-05-11T06:52:00.000Z',
    last_edited_time: '2024-05-11T06:52:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-05-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Maggio 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Maggio 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Maggio-1-5e580f65cc5e47049582bca6eb1e2bd6',
    public_url: null,
  },
  {
    object: 'page',
    id: '3af12c9a-104d-4d8e-93c5-4b6ceece6e46',
    created_time: '2024-04-30T13:07:00.000Z',
    last_edited_time: '2024-04-30T13:07:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-30',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 9',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 9',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-9-3af12c9a104d4d8e93c54b6ceece6e46',
    public_url: null,
  },
  {
    object: 'page',
    id: '71dc6802-c4d6-41df-8dfd-1d841a5e67fd',
    created_time: '2024-04-22T06:35:00.000Z',
    last_edited_time: '2024-04-22T06:35:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-8-71dc6802c4d641df8dfd1d841a5e67fd',
    public_url: null,
  },
  {
    object: 'page',
    id: '62e54285-d91c-4eac-acb0-de0f596294ad',
    created_time: '2024-04-20T12:46:00.000Z',
    last_edited_time: '2024-04-20T12:47:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-20',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-7-62e54285d91c4eacacb0de0f596294ad',
    public_url: null,
  },
  {
    object: 'page',
    id: '8858b300-082b-4e9d-83d3-7624a647f44a',
    created_time: '2024-04-20T12:46:00.000Z',
    last_edited_time: '2024-04-20T12:46:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-19',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-6-8858b300082b4e9d83d37624a647f44a',
    public_url: null,
  },
  {
    object: 'page',
    id: '13f5320c-4c5c-46dd-9593-25ef3952f126',
    created_time: '2024-04-12T13:50:00.000Z',
    last_edited_time: '2024-04-13T09:04:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-5-13f5320c4c5c46dd959325ef3952f126',
    public_url: null,
  },
  {
    object: 'page',
    id: '7ac2d60c-2813-44a3-8a54-7b5bb8ca4742',
    created_time: '2024-04-11T06:18:00.000Z',
    last_edited_time: '2024-04-11T06:18:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-4-7ac2d60c281344a38a547b5bb8ca4742',
    public_url: null,
  },
  {
    object: 'page',
    id: 'bc5e87e3-e08b-462c-a422-d0d400008a40',
    created_time: '2024-04-11T06:18:00.000Z',
    last_edited_time: '2024-04-11T06:18:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-10',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-3-bc5e87e3e08b462ca422d0d400008a40',
    public_url: null,
  },
  {
    object: 'page',
    id: '6f3174e2-c6cb-4517-95f6-3615878f1885',
    created_time: '2024-04-05T06:11:00.000Z',
    last_edited_time: '2024-04-05T06:11:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-05',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-2-6f3174e2c6cb451795f63615878f1885',
    public_url: null,
  },
  {
    object: 'page',
    id: '5fbba0fd-c868-491c-9951-c466bd52cea6',
    created_time: '2024-04-04T06:59:00.000Z',
    last_edited_time: '2024-04-04T14:35:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-04-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Aprile 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Aprile 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Aprile-1-5fbba0fdc868491c9951c466bd52cea6',
    public_url: null,
  },
  {
    object: 'page',
    id: '9ab5c320-7e5a-49d9-b06c-7ae984bfd238',
    created_time: '2024-03-26T10:07:00.000Z',
    last_edited_time: '2024-03-26T12:12:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '54a80acd-b43f-4cbe-a46e-003d2984c839',
            name: 'Almogran',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-03-26',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Marzo 5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Marzo 5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Marzo-5-9ab5c3207e5a49d9b06c7ae984bfd238',
    public_url: null,
  },
  {
    object: 'page',
    id: '69650efc-6f7d-411e-b37d-41f348b0b59e',
    created_time: '2024-03-22T23:18:00.000Z',
    last_edited_time: '2024-11-22T09:58:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-03-21',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Marzo 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Marzo 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Marzo-4-69650efc6f7d411eb37d41f348b0b59e',
    public_url: null,
  },
  {
    object: 'page',
    id: 'b35c1cc2-01d2-453c-afd2-552923083643',
    created_time: '2024-03-13T16:35:00.000Z',
    last_edited_time: '2024-03-13T20:04:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-03-13',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Marzo 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Marzo 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Marzo-3-b35c1cc201d2453cafd2552923083643',
    public_url: null,
  },
  {
    object: 'page',
    id: '2c7892ac-ecdc-45ba-a925-f163197bf79c',
    created_time: '2024-03-06T08:30:00.000Z',
    last_edited_time: '2024-03-06T08:30:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-03-06',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Marzo 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Marzo 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Marzo-2-2c7892acecdc45baa925f163197bf79c',
    public_url: null,
  },
  {
    object: 'page',
    id: '411abc8f-04af-4ae6-bfd8-1f780dbac8cd',
    created_time: '2024-03-01T13:01:00.000Z',
    last_edited_time: '2024-03-01T19:45:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-03-01',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Marzo 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Marzo 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Marzo-1-411abc8f04af4ae6bfd81f780dbac8cd',
    public_url: null,
  },
  {
    object: 'page',
    id: '178fc74d-205a-4a90-95e4-299e0bb39c3c',
    created_time: '2024-02-29T00:05:00.000Z',
    last_edited_time: '2024-02-29T00:06:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-28',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 12',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 12',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-12-178fc74d205a4a9095e4299e0bb39c3c',
    public_url: null,
  },
  {
    object: 'page',
    id: '23bfad95-5cdd-4bab-a925-0f3f219c99a4',
    created_time: '2024-02-24T07:14:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-24',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 11',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 11',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-11-23bfad955cdd4baba9250f3f219c99a4',
    public_url: null,
  },
  {
    object: 'page',
    id: '4c647fdc-dc23-4dde-8f47-f629a9ffe2ae',
    created_time: '2024-02-22T21:55:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '4b8d9c82-05fb-4cad-8aed-ac047ce7e74f',
            name: 'Difmetre',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-22',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 10',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 10',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-10-4c647fdcdc234dde8f47f629a9ffe2ae',
    public_url: null,
  },
  {
    object: 'page',
    id: '3e2f1770-135a-4f30-af4e-5dba16d68258',
    created_time: '2024-02-21T07:00:00.000Z',
    last_edited_time: '2024-11-22T09:58:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-21',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 9',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 9',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-9-3e2f1770135a4f30af4e5dba16d68258',
    public_url: null,
  },
  {
    object: 'page',
    id: 'd1fddf98-d105-41a0-b3a8-072873820188',
    created_time: '2024-02-12T07:59:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-12',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 8',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 8',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-8-d1fddf98d10541a0b3a8072873820188',
    public_url: null,
  },
  {
    object: 'page',
    id: '9c0d84d8-ece0-4e79-8558-c9d28f36f214',
    created_time: '2024-02-11T07:34:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-11',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 7',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 7',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-7-9c0d84d8ece04e798558c9d28f36f214',
    public_url: null,
  },
  {
    object: 'page',
    id: '9dc620ca-a058-4cb9-b8c6-777c03e6b874',
    created_time: '2024-02-09T22:31:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-09',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 6',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 6',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-6-9dc620caa0584cb9b8c6777c03e6b874',
    public_url: null,
  },
  {
    object: 'page',
    id: 'a389e242-e2bc-43d0-9178-0d5a50b5cd4c',
    created_time: '2024-02-08T12:53:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-08',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 5',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 5',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-5-a389e242e2bc43d091780d5a50b5cd4c',
    public_url: null,
  },
  {
    object: 'page',
    id: '68c601a8-f0cf-4482-b6ac-469e3877e5ac',
    created_time: '2024-02-08T12:53:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-06',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 4',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 4',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-4-68c601a8f0cf4482b6ac469e3877e5ac',
    public_url: null,
  },
  {
    object: 'page',
    id: '41debc8e-cc84-4a2c-a11c-40ca386f5fda',
    created_time: '2024-02-02T12:23:00.000Z',
    last_edited_time: '2024-11-22T09:58:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-04',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 2',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 2',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-2-41debc8ecc844a2ca11c40ca386f5fda',
    public_url: null,
  },
  {
    object: 'page',
    id: '99f93d1c-7eea-4aaa-bfde-3c1e975aa1d4',
    created_time: '2024-02-02T12:23:00.000Z',
    last_edited_time: '2024-11-22T09:58:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'M>^=',
            name: 'Relpax',
            color: 'pink',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-05',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 3',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 3',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-3-99f93d1c7eea4aaabfde3c1e975aa1d4',
    public_url: null,
  },
  {
    object: 'page',
    id: '9a86eae0-9f57-4aa9-8bec-db4151bae631',
    created_time: '2024-02-02T12:23:00.000Z',
    last_edited_time: '2024-03-01T13:02:00.000Z',
    created_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    last_edited_by: {
      object: 'user',
      id: '9256b047-66a4-48af-ad11-cb01c2be4513',
    },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e3ce120e-15b5-41f3-97b2-aa938e17bb80',
    },
    archived: false,
    in_trash: false,
    properties: {
      Drugs: {
        id: 'Pc_z',
        type: 'multi_select',
        multi_select: [
          {
            id: 'Pv~~',
            name: 'Oki',
            color: 'blue',
          },
          {
            id: '_@S_',
            name: 'Indoxen',
            color: 'green',
          },
        ],
      },
      Date: {
        id: 'Zy%7Bb',
        type: 'date',
        date: {
          start: '2024-02-02',
          end: null,
          time_zone: null,
        },
      },
      Note: {
        id: '%5BTV%60',
        type: 'rich_text',
        rich_text: [],
      },
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'Febbraio 1',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Febbraio 1',
            href: null,
          },
        ],
      },
    },
    url: 'https://www.notion.so/Febbraio-1-9a86eae09f574aa98becdb4151bae631',
    public_url: null,
  },
]

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
export const items = Object.values(res).sort((a, b) => a.month.localeCompare(b.month))
