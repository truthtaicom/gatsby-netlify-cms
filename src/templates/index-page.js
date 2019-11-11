import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  services = []
}) => (
  <div>
    <strong>{title}23</strong>
    <ul>
      {
        services.map(elm => (<li>{elm.title} - { elm.subTitle }</li>))
      }
    </ul>

  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        {...frontmatter}
      />
    </Layout>
  )
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        # image {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        summary {
          prefix
          content
          suffix
          title
        }
        services {
          title
          subTitle
        }
      }
    }
  }
`
