import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pic_container}>
        <img src="./Michael.png" alt="Michael B. Jordan image profile" />
      </div>
      <div className={styles.section_text}>
        <p className={styles.section_text_p1}>Hola a todos, soy</p>
        <h1 className={styles.title}>Michael B. Jordan</h1>
        <p className={styles.section_text_p2}>Actor y Productor</p>
      </div>
    </section>
  );
};

export default Header;
