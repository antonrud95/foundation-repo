import { GraphQLClient } from "graphql-request";
import * as Sections from "../components";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
export async function getStaticProps() {
  const { homepages } = await graphcms.request(
    `
    query IndexQuery() {
      homepages {
        sections {
          __typename
          ... on Header {
            logo {
              logoimage {
                url
              }
            }
            button {
              name
              type
              link
            }
            navlinks {
              link
              href
            }
          }
          ... on HeroSection {
            title
            text
            buttons {
              id
              name
              link
              type
            }
            image {
              url
            }
          }
        }
      }
    }
  `
  );

  return {
    props: {
      homepages,
    },
  };
}


function Index({ homepages }) {
  return (
    <>
      {homepages[0].sections.map((section, index) => {
        const Component = Sections[section.__typename];

        if (!Component) return null;

        return <Component key={index} {...section} />;
      })}
    </>
  );
}

export default Index
