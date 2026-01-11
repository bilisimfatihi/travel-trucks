import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className={styles.notFoundPage}>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <NavLink className="search-button" to="/">
          Go to Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
