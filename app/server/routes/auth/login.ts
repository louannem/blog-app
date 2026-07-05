import { Elysia, t } from 'elysia'
import { jwt } from '@elysia/jwt';
import { CredentialsSchema, getUser } from '~/server/utils/session';

const login = new Elysia()
  .use(
    jwt({
        name: 'jwt',
        secret: 'dummy'
    })
  )
  .post(
    '/login',
    async ({ body, status, jwt, cookie: { auth } }) => {
      const { username, password } = body as { username: string; password?: string };
      const credentials = CredentialsSchema.safeParse(body);

      if (!credentials || credentials.error) return status(500, "Username and password are required");

      //Mock user login here
      const user = await getUser(username);

      // Replace this placeholder logic with your real authentication flow.
      if (username !== 'jane.doe@mail.com' || password !== 'azerty' || !user) {
        return status(401, "Invalid credentials");
      }

      const accessToken = await jwt.sign({
        sub: user.username,
        email: user.email,
        type: 'access',
        exp: '15m'
      })

      const refreshToken = await jwt.sign({
        sub: user.username,
        type: 'refresh',
        exp: '7d'
      })

      auth?.set({
        value: accessToken,
        httpOnly: false,
        maxAge: 7 * 86400,
        path: '/',
      })

      return status(200, {
        accessToken,
        refreshToken
      });
    },
    {
      body: t.Object({
        username: t.Union([t.String(), t.Null(), t.Undefined()]),
        password: t.Union([t.String(), t.Null(), t.Undefined()])
      })
    }
  )

export default login;
