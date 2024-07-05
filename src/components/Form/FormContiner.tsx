"use client";
import { useState } from "react";
import { Button, Input, Label } from "../UI";
import styles from "./Form.module.css";
import { validateForm, FormData, FormErrors } from "../../helper/validate";
import Swal from "sweetalert2";

const FormContainer: React.FC = () => {
  const initialData: FormData = {
    name: "",
    mail: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        title: "Error al enviar el mensaje",
        text: "Asegúrate de completar todos los campos del formulario.",
        icon: "error",
        confirmButtonColor: "#0b0c0d",
      });
    } else {
      Swal.fire({
        title: `Mensaje enviado correctamente`,
        text: "Michael leerá tu mensaje en breve",
        icon: "success",
        confirmButtonColor: "#0b0c0d",
      }).then(() => {
        setFormData(initialData);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className={styles.form_container}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={styles.label_error}>
        <Label htmlFor="name">Nombre:</Label>
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <Input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <div className={styles.label_error}>
        <Label htmlFor="mail">Email:</Label>
        {errors.mail && <span className={styles.error}>{errors.mail}</span>}
      </div>
      <Input
        id="mail"
        name="mail"
        type="text"
        value={formData.mail}
        onChange={handleChange}
      />
      <div className={styles.label_error}>
        <Label htmlFor="message">Mensaje:</Label>
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>
      <Input
        id="message"
        name="message"
        type="text"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default FormContainer;
