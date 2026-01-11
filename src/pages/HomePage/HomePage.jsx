import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Our Application</h1>
          <p className={styles.subtitle}>
            Discover features and functionalities that enhance your experience.
          </p>
        </div>
        <NavLink to="/catalog" className="search-button">
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
