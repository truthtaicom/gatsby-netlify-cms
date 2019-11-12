import React from 'react'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(entry, "data >>>")

  if (data) {
    return (
      <ServicePageTemplate
        {...data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ServicePagePreview
