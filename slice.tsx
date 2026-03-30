import { createSlice } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { endpointspage } from "./endpointspage";

export const Postslice=createApi({
    reducerPath:'postslice',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:endpointspage,
});
 
export const {useGetPostsQuery,useGetCommentsQuery}=Postslice;