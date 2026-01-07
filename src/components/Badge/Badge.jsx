import styles from "./Badge.module.css";

const Badge = ({ badge }) => {
  return (
    <span className={styles.badge}>
      <svg className={styles.icon}>
        <use href={`/icons.svg#${badge.icon}`}></use>
      </svg>
      {badge.label}
    </span>
  );
};

export default Badge;
