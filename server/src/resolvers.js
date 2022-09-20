module.exports = {
  Query: {
    albums: async (_, __, { dataSources }) => {
      return dataSources.jsonPlaceHolderAPI.getAllAlbums();
    },
    album: async (_, { id }, { dataSources }) => {
      return dataSources.jsonPlaceHolderAPI.getAlbum(id);
    },
  },
};
