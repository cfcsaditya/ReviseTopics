export const endpointspage = builder => ({
  getPosts: builder.query({
    query: () => '/posts',
  }),
  getComments: builder.query({
    query: () => '/comments',
  }),
});
