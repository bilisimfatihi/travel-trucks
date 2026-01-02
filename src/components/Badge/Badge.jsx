import styles from "./Badge.module.css";

const Badge = ({ badge }) => {
  return <span className={styles.badge}>{badge}</span>;
};

export default Badge;
