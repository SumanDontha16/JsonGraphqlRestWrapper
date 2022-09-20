module.exports = {
  Query: {
    albums: async (_, __, { dataSources }) => {
      return dataSources.jsonPlaceHolderAPI.getAllAlbums();
    },
    album: async (_, { id }, { dataSources }) => {
      return dataSources.jsonPlaceHolderAPI.getAlbum(id);
    },
    // User API
    users: async (_, __, { dataSources }) => {
      return dataSources.userAPI.getAllUsers();
    },
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.getUser(id);
    },
  },
};
