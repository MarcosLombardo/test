import { Button, Input, Label } from "../UI";
import styles from "./Form.module.css";

const FormContainer = () => {
  return (
    <form className={styles.form_container}>
      <Label htmlFor="name">Nombre:</Label>
      <Input id="name" name="name" type="text" />
      <Label htmlFor="mail">Email:</Label>
      <Input id="mail" name="mail" type="text" />
      <Label htmlFor="message">Mensaje:</Label>
      <Input id="message" name="message" type="" />
      <Button>Enviar</Button>
    </form>
  );
};

export default FormContainer;
