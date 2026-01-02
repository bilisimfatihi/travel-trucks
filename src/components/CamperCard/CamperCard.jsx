import Badge from "../Badge/Badge";
import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const features = [
    "AC",
    "TV",
    "bathroom",
    "gas",
    "kitchen",
    "microwave",
    "radio",
    "refrigerator",
    "transmission",
  ];

  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img src={camper.gallery[0].original} alt={camper.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>
            {camper.id}.{camper.name}
          </h3>
          <div className={styles.inforow}>
            <span className={styles.price}>€{camper.price}.00</span>
            <button className={styles.fav}>
              <svg className={styles.icon}>
                <use href="src/assets/icons.svg#heart-default"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.inforow}>
          <div className={styles.rating}>
            <svg className={styles.icon}>
              <use href="src/assets/icons.svg#star-pressed"></use>
            </svg>
            {camper.rating} ({camper.reviews.length} Reviews)
          </div>
          <div className={styles.location}>
            {" "}
            <svg className={styles.icon}>
              <use href="src/assets/icons.svg#map-grey"></use>
            </svg>
            {camper.location}
          </div>
        </div>
        <div className={styles.description}>{camper.description}</div>
        <div className={styles.features}>
          {features.map((feature) =>
            camper[feature] ? <Badge key={feature} badge={feature} /> : null
          )}
        </div>
        <a href={`/catalog/${camper.id}`} className="search-button">
          Show more
        </a>
      </div>
    </li>
  );
};

export default CamperCard;
