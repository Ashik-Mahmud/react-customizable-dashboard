// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_config } from '../../config/api.config'

// Define a service using a base URL and expected endpoints
export const BaseApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_config.base_api}` }),
    endpoints: () => ({}),
    tagTypes: ['blogs', 'addBlog']
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
