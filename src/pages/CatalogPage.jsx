import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../redux/campers/campersOps";
import CamperCard from "../components/CamperCard/CamperCard";
import Loader from "../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);
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
    </div>
  );
};

export default CatalogPage;
