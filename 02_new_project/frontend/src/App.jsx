import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./Pages/EditEventPage"
import EventDetailPage from "./Pages/EventDetailPage"
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage"
import EventsRoot from "./Pages/EventsRoot"
import HomePage from "./Pages/HomePage"
import NewEventPage from "./Pages/NewEventPage"
import Root from "./Pages/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
