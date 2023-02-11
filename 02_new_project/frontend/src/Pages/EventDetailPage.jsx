import React, { Fragment } from "react"
import { useParams } from "react-router-dom"

const EventDetailPage = () => {
  const params = useParams()

  return (
    <Fragment>
      <h1>Detail Page</h1>
      <main>
        <p>Event id: {params.id}</p>
      </main>
    </Fragment>
  )
}

export default EventDetailPage
