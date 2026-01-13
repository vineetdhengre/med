import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// adjust baseUrl to your API
export const webinarsApi = createApi({
  reducerPath: "webinarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api", // change to your gateway path
    prepareHeaders: (headers, { getState }) => {
      // Explicitly type getState() as RootState to avoid 'unknown' error
      const token = (getState() as { auth: { accessToken?: string } }).auth
        .accessToken;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Webinar"],
  endpoints: (builder) => ({
    getWebinars: builder.query<
      any, // Replace 'any' with your actual response type if known
      { category?: string; page?: number; limit?: number; upcoming?: boolean }
    >({
      query: ({ category, page = 1, limit = 20, upcoming } = {}) => {
        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (upcoming) params.append("upcoming", "true");
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        return `/webinars?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.items.map((r: any) => ({ type: "Webinar", id: r.id })),
              { type: "Webinar", id: "LIST" },
            ]
          : [{ type: "Webinar", id: "LIST" }],
    }),

    getWebinarById: builder.query({
      query: (id) => `/webinars/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Webinar", id }],
    }),

    registerForWebinar: builder.mutation({
      query: ({ id }) => ({
        url: `/webinars/${id}/register`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Webinar", id: "LIST" }],
    }),
  }),
});

export const {
  useGetWebinarsQuery,
  useGetWebinarByIdQuery,
  useRegisterForWebinarMutation,
} = webinarsApi;
