import styles from "./index.less";
function Welcome() {
  console.log(styles)
  return <div className={styles.title}>Welcome</div>;
}

export default Welcome;
