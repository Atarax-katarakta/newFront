import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const universityApi = createApi({
    reducerPath: 'universityApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ats.k-lab.su/'}),
    endpoints: (builder) => ({
        getUniversity: builder.query({
            query: (id) => `filteredbyuniversities/?university_id=${id}&limit=1000`
        })

    }),
})

export const {useGetUniversityQuery} = universityApi;
