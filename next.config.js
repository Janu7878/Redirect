module.exports = {
  async redirects() {
    return [
      {
        source: '/sample-page',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
