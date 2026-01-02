import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../redux/campers/campersOps";
import { incrementPage, resetCampers } from "../redux/campers/campersSlice";
import { useSearchParams } from "react-router-dom";
import CamperCard from "../components/CamperCard/CamperCard";
import Loader from "../components/Loader/Loader";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import Filters from "../components/Filters/Filters";
import { setFilters } from "../redux/filters/filtersSlice";

const CatalogPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const { total, page, campers, loading, error } = useSelector(
    (state) => state.campers
  );
  const filters = useSelector((state) => state.filters);
  const params = Object.fromEntries([...searchParam]);

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      dispatch(setFilters(params));
    } else {
      dispatch(setFilters({})); // URL boşsa filtreyi sıfırla
    }
  }, [searchParam, dispatch]);

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(
      getCampers({
        page: 1,
        limit: 4,
        ...filters,
      })
    );
  }, [filters, dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCampers({ page, limit: 4, ...filters }));
    }
  }, [page, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div className="container">
      <div className="catalog">
        <div>
          <Filters />
        </div>
        <div>
          <h1>Catalog Page</h1>
          {loading && <Loader />}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <ul className="camper-list">
              {campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </ul>
          )}
          {!loading && total > campers.length && (
            <div style={{ textAlign: "center" }}>
              <LoadMoreButton onClick={handleLoadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
