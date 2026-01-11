import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CamperCard from "../../components/CamperCard/CamperCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.items);

  if (!favorites.length) {
    return (
      <EmptyState
        title="No favorites yet"
        description="Go to the catalog and add some campers to your favorites."
        action={
          <button
            className="search-button"
            onClick={() => {
              navigate("/catalog");
            }}
          >
            Go To Catalog
          </button>
        }
      />
    );
  }

  return (
    <div className="container">
      <div className={styles.favorites}></div>
      <ul className={styles.camperList}>
        {favorites.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
