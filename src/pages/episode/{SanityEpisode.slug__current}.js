import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout.js';

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      children {
        ... on SanityImageAsset {
          id
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

// TODO: Add image data
export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;
  return (
    <Layout title={data.title} description={episode.description}>
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.data} - {episode.description})
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
        </li>
      </ul>
    </Layout>
  );
}
