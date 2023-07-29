import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const universityApi = createApi({
    reducerPath: 'universityApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://80.78.255.50/'}),
    endpoints: (builder) => ({
        getUniversity: builder.query({
            query: (id) => `universities/${id}`
        })
    }),
})

export const {useGetUniversityQuery} = universityApi;
