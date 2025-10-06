import {z} from "zod";

/** Users */
export const userSchema = z.object({
    id: z.number(),
    email: z.string(),
    password: z.string(),
    username: z.string()
})

type User = z.infer<typeof userSchema>
export type GetAllUsers = Pick<User, 'id' |'email' | 'username'>
export type UserRegistrationForm = Pick<User, 'email' | 'password' | 'username'>
export type UserEditForm = Pick<User, 'email' | 'username'>


export const userListSchema = z.array(
    userSchema.pick({
        id: true,
        email: true,
        username: true
    })
)

export const userByIdSchema = userSchema.pick({
    id: true,
    email: true,
    username: true
})
