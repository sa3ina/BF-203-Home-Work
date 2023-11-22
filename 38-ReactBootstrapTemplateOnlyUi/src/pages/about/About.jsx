import styles from "../../assets/styles/about.module.css";
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2>
              Stylish Portfolio is the perfect theme for your next project!
            </h2>
            <p>
              This theme features a flexible, UX friendly sidebar menu and stock
              photos from our friends at
            </p>
            <a className={styles.about} href="#services">
              What We Offer
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
