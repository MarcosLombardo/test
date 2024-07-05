interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
import styles from "./UI.module.css";

export function Button({ children, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
