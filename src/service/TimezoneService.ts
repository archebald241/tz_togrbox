import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { ITimezone } from "../models/ITimezone"

export const timezoneApi = createApi({
    reducerPath: "timezoneApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (build) => ({
        fetchTimezone: build.query<ITimezone[], any>({
            query: () => ({
                url: "/timezone"
            })
        })
    })
})