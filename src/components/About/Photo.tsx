import styles from "./Photo.module.css";

const Photo = () => {
  return (
    <div className={`${styles.container_photo} ${styles.card0}`}>
      <div className={styles.border}>
        <h2 className={styles.text}>Michael</h2>
      </div>
    </div>
  );
};

export default Photo;
