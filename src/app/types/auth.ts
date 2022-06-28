export type user = {
    _id: string,
    userName: string,
    email: string,
    password: string,
    role: number,
    status: number
}
export type userUpdate = {
    status?: number
}
export type signin = {
    email: string,
    password: string
}
export type TypeLoginResponse = {
    accessToken: string,
    user: {
      email: string,
      password: string,
      role: number
    }
}