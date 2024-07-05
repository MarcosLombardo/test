export interface FormData {
  name: string;
  mail: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  mail?: string;
  message?: string;
}

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name) errors.name = "El nombre es requerido";
  if (!formData.mail) {
    errors.mail = "El email es requerido";
  } else if (!validateEmail(formData.mail)) {
    errors.mail = "El email no es válido";
  }
  if (!formData.message) errors.message = "El mensaje es requerido";

  return errors;
};
