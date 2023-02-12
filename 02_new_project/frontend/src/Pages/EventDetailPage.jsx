import React from "react"
import { json, useLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

const EventDetailPage = () => {
  const data = useLoaderData()

  return <EventItem event={data.event} />
}

export default EventDetailPage

export const loader = async ({ req, params }) => {
  const res = await fetch("http://localhost:8080/events/" + params.id)

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for the selected event." },
      { status: 500 }
    )
  } else {
    return res
  }
}
