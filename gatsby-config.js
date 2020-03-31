module.exports = {
  siteMetadata: {
    title: 'Казаченко Вячеслав',
    social: [
      {
        name: 'github',
        value: 'skazko',
        link: 'https://github.com/skazko'
      },
      {
        name: 'email',
        value: 'kreeon@ya.ru',
        link: 'mailto:kreeon@ya.ru'
      },
      {
        name: 'telegram',
        value: 'YaSlava',
        link: 'tg://resolve?domain=YaSlava'
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
