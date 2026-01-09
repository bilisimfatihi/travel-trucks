import styles from "./EmptyState.module.css";

const EmptyState = ({ title, description, action }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
};

export default EmptyState;
