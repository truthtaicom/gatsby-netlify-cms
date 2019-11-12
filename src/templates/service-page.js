import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ServicePageTemplate = ({
  title
}) => (
  <div className="content">
    {title}
  </div>
)


const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <ServicePageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}


export default ServicePage

export const servicesPageQuery = graphql`
  query ServicePage {
    markdownRemark(frontmatter: { templateKey: {eq: "service-page"}}) {
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
