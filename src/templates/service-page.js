import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProductPageTemplate = ({
  title
}) => (
  <div className="content">
    {title}
  </div>
)


const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}


export default ProductPage

export const productPageQuery = graphql`
  query ServicePage {
    markdownRemark(frontmatter: {templateKey: {eq: "service-page"}}) {
      frontmatter {
        title
        body {
          subtitle
          title
        }
      }
    }
  }
`
