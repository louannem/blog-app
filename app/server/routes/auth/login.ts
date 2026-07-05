import { Elysia, t } from 'elysia'
import { CredentialsSchema, getUser } from '~/server/utils/session';

const login = new Elysia()
  .post(
    '/login',
    ({ body, status }) => {
      const { username, password } = body as { username: string; password?: string };
      const credentials = CredentialsSchema.safeParse(body);
      console.log(credentials)

      if (!credentials || credentials.error) return status(500, "Username and password are required");

      //Mock user login here
      const user = getUser(username);

      // Replace this placeholder logic with your real authentication flow.
      if (username !== 'jane.doe@mail.com' || password !== 'azerty') {
        return status(401, "Invalid credentials");
      }

      return status(200);
    },
    {
      body: t.Object({
        username: t.Union([t.String(), t.Null(), t.Undefined()]),
        password: t.Union([t.String(), t.Null(), t.Undefined()])
      })
    }
  )

export default login;
