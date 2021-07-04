import * as contentful from 'contentful'

export const client = contentful.createClient({
    // space: process.env.REACT_APP_SPACE_ID,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
    space: 't1t0ykdysouh',
    accessToken: 'Un000GoCnWe6f1T9tRbUQQZkiNOy7mVkUlB9_If5a_4'
})