import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.container}>
      <p className={styles.section_text_p1}>Explora mi</p>
      <h1 className={styles.title}>Filmografía</h1>
      <div className={styles.gallery_container}>
        <div className={styles.img_container}>
          <img
            src="./Creed.png"
            alt="Michael B. Jordan interpretando a Adonis Creed"
            className={styles.img}
          />
          <div className={styles.overlay}>
            <h3>Creed</h3>
            <p>
              Un boxeador de peso semi-pesado desvalido pero talentoso y el hijo
              del campeón mundial de peso pesado Apollo Creed.
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            src="./Black_Panther.png"
            alt="Michael B. Jordan interpretando a Erik Killmonger"
            className={styles.img}
          />
          <div className={styles.overlay}>
            <h3>Black Panther</h3>
            <p>
              Un soldado estadounidense de operaciones negras que busca derrocar
              a su primo T&apos;Challa, con su propia opinión sobre cómo debería
              gobernarse Wakanda.
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            src="./Fant4astic.png"
            alt='Michael B. Jordan interpretando a Johnny Storm ak "the Human Torch"'
            className={styles.img}
          />
          <div className={styles.overlay}>
            <h3>Fantastic Four</h3>
            <p>
              El problemático hijo del Dr. Storm y hermanastro de Sue. El
              eventualmente desarrolla la capacidad para encender su cuerpo en
              llamas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
