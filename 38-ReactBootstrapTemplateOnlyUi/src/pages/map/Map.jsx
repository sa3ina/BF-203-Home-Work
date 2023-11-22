import styles from "../../assets/styles/map.module.css";
function Map() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48656.08684387524!2d49.8127177!3d40.3422256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dca0a08ddf5%3A0xddd20fe143a690b6!2sIcherisheher!5e0!3m2!1sen!2saz!4v1700634079452!5m2!1sen!2saz"></iframe>
        </div>
      </div>
    </>
  );
}

export default Map;
