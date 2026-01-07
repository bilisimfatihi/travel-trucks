import { useSelector } from "react-redux";
import Badge from "../Badge/Badge";
import { FEATURES } from "../../constants/const";
import styles from "./Features.module.css";

const Features = () => {
  const { selectedCamper } = useSelector((state) => state.campers);

  return (
    <div className={styles.features}>
      <div className={styles.badges}>
        {FEATURES.map((feature) =>
          String(selectedCamper[feature.name]) === feature.value ? (
            <Badge key={feature.label} badge={feature} />
          ) : null
        )}
      </div>
      <div className={styles.details}>
        <h3>Vehicle Details</h3>
        <hr></hr>
        <div className={styles.info}>
          <div className={styles.item}>
            <span>Form</span>
            <span>{selectedCamper.form}</span>
          </div>
          <div className={styles.item}>
            <span>Length</span>
            <span>{selectedCamper.length}</span>
          </div>
          <div className={styles.item}>
            <span>Width</span>
            <span>{selectedCamper.width}</span>
          </div>
          <div className={styles.item}>
            <span>Height</span>
            <span>{selectedCamper.height}</span>
          </div>
          <div className={styles.item}>
            <span>Tank</span>
            <span>{selectedCamper.tank}</span>
          </div>
          <div className={styles.item}>
            <span>Consumption</span>
            <span>{selectedCamper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
