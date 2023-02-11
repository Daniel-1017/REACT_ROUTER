import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
]

const EventsPage = () => {
  return (
    <Fragment>
      <main>
        <ul>
          {EVENTS.map(event => (
            <li>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  )
}

export default EventsPage
