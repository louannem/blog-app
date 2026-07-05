import { z } from "@nuxt/content";

//ENV
const SECRET = new TextEncoder().encode("dummy");
const ACCESS_TOKEN_TTL = 30;


//INTERFACES
export const UserSchema = z.object({
  username: z.string().min(2),
  password: z.string(),
  email: z.string().min(2),

})
export const CredentialsSchema = z.object({
  username: z.string().min(2),
  password: z.literal("azerty"),
})

//MOCKS AND DEMO FUNCTIONS
export function getUser(username: string) {
  return Promise.resolve({
    username,
    email: "jane.doe@mail.com"
  })
}