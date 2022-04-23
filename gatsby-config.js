module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jackiewhitworth.com',
    title: "Jackie's Blog",
    description: 'a blog',
    image:
      'https://res.cloudinary.com/dkgsfdxly/image/upload/v1648916619/samples/IMG_9086_qeueih.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {},
    },
  ],
};
