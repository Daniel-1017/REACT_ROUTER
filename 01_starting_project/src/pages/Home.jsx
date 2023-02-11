import React, { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate("/products")
  }

  return (
    <Fragment>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">The list of products</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </Fragment>
  )
}

export default Home
