import { graphql, useStaticQuery } from 'gatsby'

const useStiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useStiteMetadata
