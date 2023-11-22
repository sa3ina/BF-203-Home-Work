import styles from "../../assets/styles/recent.module.css";
function Recent() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h3 className={styles.portfolio}>PORTFOLIO</h3>
            <h2 className={styles.recent}>Recent Projects</h2>
          </div>
          <div className={styles.photos}>
            <div className={styles.photo1}>
              <div className={styles.textphoto}>
                <h2 className={styles.h2}>STATIONARY</h2>
                <p className={styles.p}>
                  A yellow pencil with envelopes on a clean, blue backdrop!
                </p>
              </div>
            </div>
            <div className={styles.photo2}>
              <div className={styles.textphoto}>
                <h2 className={styles.h2}>ICE CREAM</h2>
                <p className={styles.p}>
                  A dark blue background with a colored pencil, a clip, and a
                  tiny ice cream cone!
                </p>
              </div>
            </div>
            <div className={styles.photo3}>
              <div className={styles.textphoto}>
                <h2 className={styles.h2}>STRAWBERRIES</h2>
                <p className={styles.p}>
                  Strawberries are such a tasty snack, especially with a little
                  sugar on top!
                </p>
              </div>
            </div>
            <div className={styles.photo4}>
              <div className={styles.textphoto}>
                <h2 className={styles.h2}>WORKSPACE</h2>
                <p className={styles.p}>
                  Strawberries are such a tasty snack, especially with a little
                  sugar on top!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent;
