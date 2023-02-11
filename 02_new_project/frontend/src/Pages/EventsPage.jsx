import React from "react"
import { useLoaderData } from "react-router-dom"

import EventsList from "../components/EventsList"

function EventsPage() {
  const { events, isError, message } = useLoaderData()

  // if (isError) {
  //   return <p>{message}</p>
  // }

  return <EventsList events={events} />
}

export default EventsPage

export async function loader() {
  const response = await fetch("http://localhost:8080/events")

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." }
    throw new { message: "Could not fetch events." }()
  } else {
    return response
  }
}
