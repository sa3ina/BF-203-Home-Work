import styles from "../../assets/styles/portfolio.module.css";
function Portfolio() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>
              Welcome to
              <em> your </em>
              next website!
            </h1>
            <a href="#about">Download Now!</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
