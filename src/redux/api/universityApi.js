import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const universityApi = createApi({
    reducerPath: 'universityApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://80.78.255.50/'}),
    endpoints: (builder) => ({
        getUniversity: builder.query({
            query: (id) => `filteredbyuniversities/?university_id=${id}&limit=1000`
        })

    }),
})

export const {useGetUniversityQuery} = universityApi;
