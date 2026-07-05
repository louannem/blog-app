import { Elysia } from 'elysia'
import login from '~/server/routes/auth/login'

export default () =>
  new Elysia()
    .get('/hello', () => ({ message: 'Hello world!' }))
    .use(login)
