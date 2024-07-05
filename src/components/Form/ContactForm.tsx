import styles from "./Form.module.css";
import FormContainer from "./FormContiner";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <p className={styles.section_text_p1}>Ponte en</p>
      <h1 className={styles.title}>Contacto Conmigo</h1>
      <FormContainer />
    </section>
  );
};

export default ContactForm;
