import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
            image
            title
            titleTemplate
            twitterUsername
            url
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
