import { awards, films } from "../../../data";
import styles from "./Interests.module.css";

const Interests = () => {
  return (
    <section className={styles.container}>
      <p className={styles.section_text_p1}>Algunos de</p>
      <h1 className={styles.title}>Mis Logros e Intereses</h1>

      <div className={styles.interests_container}>
        <div className={styles.films_awards_container}>
          {/* Películas */}
          <div className={styles.details_container}>
            <h2 className={styles.sub_title}>Películas</h2>
            <div className={styles.films_container}>
              {films.map((film) => (
                <article key={film.id} className={styles.article}>
                  {film.logo}
                  <div>
                    <h3>{film.film}</h3>
                    <p>{film.year}</p>
                    <p>{film.personaje}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Premios */}
          <div className={styles.details_container}>
            <h2 className={styles.sub_title}>Premios</h2>
            <div className={styles.films_container}>
              {awards.map((award) => (
                <article key={award.id} className={styles.article}>
                  {award.logo}
                  <div>
                    <h3>{award.film}</h3>
                    <p>{award.year}</p>
                    <p>{award.nomination}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
