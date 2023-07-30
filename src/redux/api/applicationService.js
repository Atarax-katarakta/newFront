import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const applicationService = createApi({
    reducerPath: 'applicationService',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ats.k-lab.su/'}),
    endpoints: (builder) => ({
        getAllTown: builder.query({
            query: (arg)=>'cities/?limit=1000'
        }),
        getUnversityByTown: builder.query({
            query: (city_name)=>`universitiesbycity/?city_name=${city_name}`
        }),
        getSpecialtyByUniver: builder.query({
            query: (id_unver)=>`filteredbyuniversities/?university_id=${id_unver}&limit=1000`
        })
    }),
})


export const {useGetAllTownQuery, useGetUnversityByTownQuery, useGetSpecialtyByUniverQuery} = applicationService;
