import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./Pages/EditEventPage"
import Error from "./Pages/Error"
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./Pages/EventDetailPage"
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage"
import EventsRoot from "./Pages/EventsRoot"
import HomePage from "./Pages/HomePage"
import NewEventPage from "./Pages/NewEventPage"
import Root from "./Pages/Root"
import { action as manipulateEvent } from "./components/EventForm"
import NewsletterPage, { action as newsletterAction } from "./Pages/Newsletter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEvent,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: manipulateEvent },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
