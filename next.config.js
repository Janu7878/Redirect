module.exports = {
  async redirects() {
    return [
      {
        source: '/authors/maria-thaituan',
        destination: '/categories/archeology',
        permanent: true,
      },
    ]
  },
}
