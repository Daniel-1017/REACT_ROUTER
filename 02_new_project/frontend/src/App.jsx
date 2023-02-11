import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./Pages/EditEventPage"
import EventDetailPage from "./Pages/EventDetailPage"
import EventsPage from "./Pages/EventsPage"
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
            loader: async () => {
              const response = await fetch("http://localhost:8080/events")

              if (!response.ok) {
                // to do
              } else {
                const resData = await response.json()
                return resData.events
              }
            },
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
