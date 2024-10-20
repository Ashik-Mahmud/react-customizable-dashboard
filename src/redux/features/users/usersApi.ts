import { BaseApi } from "../../api/BaseApi";

const usersApi = BaseApi.injectEndpoints({
    endpoints: (builders) => ({
        createStudent: builders.mutation({
            query: (body) => ({
                url: "/users/create-student/",
                method: "POST",
                body
            })
        }),
        getMe: builders.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
            })
        })
    })
})


export const { useCreateStudentMutation, useGetMeQuery } = usersApi;