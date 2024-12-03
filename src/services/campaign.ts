import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getCampaign = createApi({
    reducerPath: "campaign",
    baseQuery: fetchBaseQuery({ baseUrl: "https://coupontest.elabassist.com/api/" }),
    endpoints: (builder) => ({
        getCampaigns: builder.query({
            query: (labId) => `Campaign?LabId=${labId}`,
        }),
    }),
});

export const { useGetCampaignsQuery } = getCampaign;