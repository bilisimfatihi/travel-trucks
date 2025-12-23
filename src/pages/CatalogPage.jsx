import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../redux/campers/campersOps";
import { incrementPage, resetCampers } from "../redux/campers/campersSlice";
import CamperCard from "../components/CamperCard/CamperCard";
import Loader from "../components/Loader/Loader";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { total, page, campers, loading, error } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(getCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCampers({ page, limit: 4 }));
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <h1>Catalog Page</h1>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </ul>
      )}
      {!loading && total > campers.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default CatalogPage;
