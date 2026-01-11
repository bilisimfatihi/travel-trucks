import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo}>
            <img
              src={`/traveltruckslogo.svg`}
              alt="Travel Trucks logo"
              className={styles.logoIcon}
            />
          </NavLink>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
