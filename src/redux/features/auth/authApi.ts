import { BaseApi } from "../../api/BaseApi";

const authApi = BaseApi.injectEndpoints({
    endpoints: (builders) => ({
        onLogin: builders.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo
            })
        })
    })
})


export const { useOnLoginMutation } = authApi
export default authApi;