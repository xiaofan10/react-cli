import App from "../App"
import Welcome from "../page/welcome"
import Lesson from "../page/lesson"
import Lesson1 from "../page/lesson-1"

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
      },
      {
        path: "lesson1",
        element: <Lesson1 />,
      }
    ]
  }
]

export default router