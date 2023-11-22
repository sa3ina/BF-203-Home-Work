import styles from "../../assets/styles/home.module.css";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>Stylish Portfolio</h1>
            <h3>A Free Bootstrap Theme by Start Bootstrap</h3>
            <a href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
