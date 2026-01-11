import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCamperById } from "../../redux/campers/campersOps";
import Loader from "../../components/Loader/Loader";
import styles from "./CamperDetailsPage.module.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import ErrorState from "../../components/ErrorState/ErrorState";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, loading, error } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className={styles.detailsPage}>
        {loading && <SkeletonCard />}
        {error && (
          <ErrorState
            message={error}
            onRetry={() => dispatch(getCamperById(id))}
          />
        )}
        {!loading && selectedCamper && (
          <>
            <div className={styles.title}>
              <h1>{selectedCamper.name}</h1>
              <div className={styles.details}>
                <div className={styles.inforow}>
                  <div className={styles.rating}>
                    <svg className={styles.icon}>
                      <use href="/icons.svg#star-pressed"></use>
                    </svg>
                    {selectedCamper.rating} ({selectedCamper.reviews.length}{" "}
                    Reviews)
                  </div>
                  <div className={styles.location}>
                    {" "}
                    <svg className={styles.icon}>
                      <use href="/icons.svg#map-grey"></use>
                    </svg>
                    {selectedCamper.location}
                  </div>
                </div>
                <div className={styles.inforow}>
                  <span className={styles.price}>
                    €{selectedCamper.price}.00
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.images}>
              {selectedCamper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image.original}
                  alt={`${selectedCamper.name} ${index + 1}`}
                />
              ))}
            </div>
            <div className={styles.description}>
              <p>{selectedCamper.description}</p>
            </div>
            <div className={styles.tabs}>
              <nav>
                <NavLink
                  to="features"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.tablink} ${styles.active}`
                      : styles.tablink
                  }
                >
                  Features
                </NavLink>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.tablink} ${styles.active}`
                      : styles.tablink
                  }
                >
                  Reviews
                </NavLink>
              </nav>
            </div>
            <div className={styles.tabContent}>
              <Outlet />
              <BookingForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CamperDetailsPage;
