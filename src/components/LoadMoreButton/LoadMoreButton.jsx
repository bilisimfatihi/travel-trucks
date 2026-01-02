import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
