import React, { Fragment } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const params = useParams()

  return (
    <Fragment>
      <h1>Product Detail</h1>
      <p>Product Id: {params.productId}</p>
    </Fragment>
  )
}

export default ProductDetail
