module.exports = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/post": { page: "/post" },
      "/categories": { page: "/categories" },
    };
  },
};
