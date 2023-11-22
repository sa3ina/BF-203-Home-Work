import styles from "../../assets/styles/impossible.module.css";
function Impossible() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.h2}>
              The buttons below are impossible to resist...
            </h2>
            <a className={styles.click} href="#about">
              Click Me!
            </a>
            <a className={styles.look} href="#about">
              Look at Me!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impossible;
