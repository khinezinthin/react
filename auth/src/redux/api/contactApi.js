// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const contactApi = createApi({
//     reducerPath: "contactApi",
//     baseQuery: fetchBaseQuery({baseUrl: `https://contact-app.mmsdev.site/api/v1`}),
//     tagTypes: ["contact"],
//     endpoints: (builder)=>({
//         getContact: builder.query({
//             query: (token)=>({
//                 url: `/contact`,
//                 headers: {authorization: `Bearer ${token}`},
//             }),
//             providesTags: ["contact"],
//         }),
//         getSingleContact: builder.query({
//             query: ({id,token})=>({
//                 url: `/contact/${id}`,
//                 method: "GET",
//                 headers: {authorization: `Bearer ${token}`},
//             }),
//             providesTags: ["contact"],
//         }),
//         createContact: builder.mutation({
//             query: ({token,contact})=>({
//                 url: `/contact`,
//                 method: "POST",
//                 headers: {authorization: `Bearer ${token}`},
//                 body: contact,
//             }),
//             invalidatesTags: ["contact"],
//         }),
//         deleteContact: builder.mutation({
//             query: ({id,token})=>({
//                 url: `/contact/${id}`,
//                 method: "DELETE",
//                 headers: {authorization: `Bearer ${token}`},
//             }),
//             invalidatesTags: ["contact"],
//         })
//     })
// })

// export const {useGetContactQuery, useGetSingleContactQuery, useCreateContactMutation, useDeleteContactMutation} = contactApi;