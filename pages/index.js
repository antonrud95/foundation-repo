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
          ... on InfoLogo {
            infoBlocks {
              id
              titles {
                id
                title
              }
              texts {
                id
                text
              }
            }
            logos {
              id
              url
            }
          }
          ... on FeaturesSection {
            main {
              url
            }
            leftimage {
              url
            }
            featureItems {
              id
              uppertitle
              title
              text
              image {
                url
              }
              lowertitle
            }
            dropItems {
              id
              picture {
                url
              }
              title
              text
            }
          }
          ... on MessagesSection {
            image {
              url
            }
            underimage
            uppertitle
            title
            text
            message {
             text
            }
            picture {
              url
            }
            name
            position
          }
          ... on CommunicateSection {
            uppertitle
            title
            text
            button {
              name
              link
              type
            }
            image {
              url
            }
            underimage
            communicateItems {
              id
              title
              text
              navlink {
                link
                id
                href
              }
            }
          }
          ... on VisitorsSection {
            uppertitle
            title
            text
            buttons {
              id
              name
              link
              type
            }
            visitorsItems {
              id
              image {
                url
              }
              text
            }
          }
          ... on CarouselSection {
            images {
              id
              url
            }
            baloon {
              url
            }
            title
            carouselItems {
              id
              text
              name
              position
            }
          }
          ... on HiringSection {
            title
            text
            button {
              id
              name
              type
              link
            }
            hiringItems {
              id
              job
              city
            }
          }
          ... on TrialSection {
            image {
              url
            }
            title
            text
            button {
              id
              name
              type
              link
            }
            placeholder
            undertext
            link
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
