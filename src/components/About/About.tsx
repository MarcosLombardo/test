"use client";

import styles from "./About.module.css";
import Photo from "./Photo";

const About = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Sobre Mí</h1>
      <div className={styles.section_container}>
        <div className={styles.img_container}>
          <Photo />
        </div>
        <div className={styles.container_text}>
          <p className={styles.text}>
            Soy <strong>Michael B. Jordan</strong>, un actor y productor
            apasionado. Nací el 9 de febrero de 1987 en Santa Ana, California.
            Desde joven supe que la actuación sería mi camino. Mi carrera
            comenzó con papeles en series de televisión como{" "}
            <em>&quot;The Wire&quot;</em> y{" "}
            <em>&quot;Friday Night Lights&quot;</em>, pero fue mi interpretación
            de Oscar Grant en <em>&quot;Fruitvale Station&quot;</em> la que
            realmente me catapultó al reconocimiento. He tenido el honor de
            formar parte de películas icónicas como <em>&quot;Creed&quot;</em>,
            donde interpreto al boxeador Adonis Creed, y{" "}
            <em>&quot;Black Panther&quot;</em>, en la que di vida al villano
            Erik Killmonger. Además de actuar, estoy comprometido con la
            producción de proyectos que destacan voces diversas y narrativas
            poderosas. Fundé la compañía Outlier Society, que se dedica a
            producir contenido inclusivo y significativo. Cuando no estoy frente
            a la cámara o trabajando detrás de ella, disfruto del tiempo con mi
            familia y amigos, explorando nuevas aventuras y participando en
            actividades deportivas. Soy un apasionado del fitness y creo
            firmemente en la importancia de mantener una vida activa y
            saludable. Mi objetivo es seguir desafiándome a mí mismo como actor
            y productor, y continuar contribuyendo a la industria del
            entretenimiento con proyectos que no solo entretengan, sino que
            también inspiren y generen un impacto positivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
