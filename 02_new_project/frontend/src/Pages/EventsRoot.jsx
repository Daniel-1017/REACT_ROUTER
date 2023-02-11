import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

const EventsRoot = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  )
}

export default EventsRoot
