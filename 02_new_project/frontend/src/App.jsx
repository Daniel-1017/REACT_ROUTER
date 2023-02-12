import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./Pages/EditEventPage"
import Error from "./Pages/Error"
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./Pages/EventDetailPage"
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage"
import EventsRoot from "./Pages/EventsRoot"
import HomePage from "./Pages/HomePage"
import NewEventPage, { action as newEventAction } from "./Pages/NewEventPage"
import Root from "./Pages/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
