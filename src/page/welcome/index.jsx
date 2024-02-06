import styles from "./index.less";
import { Outlet } from "react-router-dom";

function Welcome() {
  console.log(styles)
  return (
    <div className={styles.title}>
      Welcome
      <Outlet />
    </div>
  )
}

export default Welcome;
