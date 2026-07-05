import z from "zod";

//ENV
const SECRET = new TextEncoder().encode("dummy");
const ACCESS_TOKEN_TTL = 30;


//INTERFACES
export const UserSchema = z.object({
  username: z.string().min(2),
  password: z.string(),
  email: z.string().min(2),
});

export type User = z.infer<typeof UserSchema>;


export const CredentialsSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(2),
})

//MOCKS AND DEMO FUNCTIONS
export function getUser(username: string) {
  return Promise.resolve({
    username,
    email: "jane.doe@mail.com"
  })
}