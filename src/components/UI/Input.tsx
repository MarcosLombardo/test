interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
import styles from "./UI.module.css";

export function Input({ children, ...props }: Props) {
  return <input className={styles.input} {...props} />;
}

export default Input;
