import { useSelector } from "react-redux";
import styles from "./Reviews.module.css";
import EmptyState from "../EmptyState/EmptyState";

const Reviews = () => {
  const { selectedCamper } = useSelector((state) => state.campers);

  return (
    <div className={styles.reviews}>
      {selectedCamper.reviews.length === 0 ? (
        <EmptyState
          title="No reviews yet"
          description="Be the first to leave a review"
        />
      ) : (
        <div>
          {selectedCamper.reviews.map((review, index) => (
            <div key={index} className={styles.block}>
              <div className={styles.person}>
                <div className={styles.avatar}>{review.reviewer_name[0]}</div>
                <div className={styles.name}>
                  <span className={styles.heading}>{review.reviewer_name}</span>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, index) => {
                      // index 0'dan başladığı için rating ile kıyaslarken +1 ekliyoruz
                      // ya da doğrudan index < review.reviewer_rating kontrolü yapıyoruz.
                      const isPressed = index < review.reviewer_rating;

                      return (
                        <svg
                          key={index}
                          className={styles.icon}
                          style={{ fill: isPressed ? "#FFC107" : "#F2F4F7" }} // Sarı veya Gri
                        >
                          <use
                            href={
                              isPressed
                                ? "/icons.svg#star-pressed"
                                : "/icons.svg#star-default" // Gri yıldız ID'niz
                            }
                          ></use>
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
