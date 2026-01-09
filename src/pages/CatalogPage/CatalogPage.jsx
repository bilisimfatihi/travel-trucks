import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/campersOps";
import { incrementPage, resetCampers } from "../../redux/campers/campersSlice";
import { useSearchParams } from "react-router-dom";
import CamperCard from "../../components/CamperCard/CamperCard";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Filters from "../../components/Filters/Filters";
import { resetFilters, setFilters } from "../../redux/filters/filtersSlice";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import ErrorState from "../../components/ErrorState/ErrorState";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { total, page, campers, loading, error } = useSelector(
    (state) => state.campers
  );
  const filters = useSelector((state) => state.filters);
  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      dispatch(setFilters(params));
    } else {
      dispatch(setFilters({}));
    }
  }, [searchParams, dispatch]);

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
          {loading && <SkeletonCard />}
          {error && (
            <ErrorState
              message={error}
              onRetry={() =>
                dispatch(getCampers({ page: 1, limit: 4, ...filters }))
              }
            />
          )}
          {!loading && !error && campers.length === 0 && (
            <EmptyState
              title="No campers found"
              description="Try adjusting your filters"
              action={
                <button
                  className="search-button"
                  onClick={() => {
                    dispatch(resetFilters());
                    setSearchParams({});
                  }}
                >
                  Clear filters
                </button>
              }
            />
          )}
          {!loading && !error && (
            <ul className="camper-list">
              {campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </ul>
          )}
          {!loading && !error && total > campers.length && (
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
