interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}
import styles from "./UI.module.css";

export function Label({ children, ...props }: Props) {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );
}

export default Label;
