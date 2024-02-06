import App from "../App"
import Welcome from "../page/welcome"
import Lesson from "../page/lesson"

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "welcome",
        element: <Welcome />,
        children: [
          {
            path: "lesson",
            element: <Lesson />,
          }
        ]
      }
    ]
  }
]

export default router