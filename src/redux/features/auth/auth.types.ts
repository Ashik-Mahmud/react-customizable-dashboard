
export type IUser = {
    userId: string
    role: string
    iat: number
    exp: number
}
export interface IInitState {
    token: string | null;
    user: IUser | null;
}