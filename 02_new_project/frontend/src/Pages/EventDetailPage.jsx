import React from "react"
import { json, redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail")

  return <EventItem event={data.event} />
}

export default EventDetailPage

export const loader = async ({ request, params }) => {
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

export const action = async ({ request, params }) => {
  const res = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  })

  if (!res.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 })
  }
  return redirect("/events")
}
