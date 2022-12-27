module.exports = {

  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'https://clips.wheedleapp.com/:slug',
        basePath: false,
        permanent: true
      },
    ]
  },
};
