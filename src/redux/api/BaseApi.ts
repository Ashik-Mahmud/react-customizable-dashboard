import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_config } from "../../config/api.config";
import { RootState } from "../store";

const prepareHeaders = (
    headers: Headers,
    api: Pick<
        BaseQueryApi,
        'getState' | 'extra' | 'endpoint' | 'type' | 'forced'
    > & { arg: string | FetchArgs },
) => {
    const token = (api.getState() as RootState).auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
        headers.set('authorization', `${token}`)
    }
    return headers

}


const baseQuery = fetchBaseQuery(
    {
        baseUrl: `${API_config.base_api}`,
        credentials: 'include',
        prepareHeaders
    })



export const BaseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['blogs', 'addBlog'],
    endpoints: () => ({})
})


