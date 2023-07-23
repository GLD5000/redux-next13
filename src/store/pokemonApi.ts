import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { InitialData } from "@/types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    search: builder.query<InitialData[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
  }),
});
