import React, { Fragment, Suspense } from "react"
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail")

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </Fragment>
  )
}

export default EventDetailPage

const loadEvent = async id => {
  const res = await fetch("http://localhost:8080/events/" + id)

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for the selected event." },
      { status: 500 }
    )
  } else {
    const resData = await res.json()
    return resData.event
  }
}

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events")

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." }
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // })
    throw json({ message: "Could not fetch events!" }, { status: 500 })
  } else {
    const resData = await response.json()
    return resData.events
  }
}

export const loader = async ({ request, params }) => {
  const { id } = params

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  })
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
