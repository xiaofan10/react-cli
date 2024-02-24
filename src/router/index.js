import App from "../App"
import Welcome from "../page/welcome"
import Context from "../page/context"
import Lesson1 from "../page/lesson-1"
import Ref from "../page/ref"
import Callback from "../page/callback"
import Reducer from "../page/reducer"
import Imperative from "../page/imperative"

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Lesson",
        element: <Welcome />,
        children: [
          {
            path: "Context",
            element: <Context />,
          },
          {
            path: "Ref",
            element: <Ref />,
          },
          {
            path: "Callback",
            element: <Callback />,
          },
          {
            path: "Reducer",
            element: <Reducer />,
          },
          {
            path: "Imperative",
            element: <Imperative />
          }
        ]
      },
      {
        path: "lesson1",
        element: <Lesson1 />,
      }
    ]
  }
]

export default router