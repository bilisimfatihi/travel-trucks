import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCamperById } from "../redux/campers/campersOps";
import Loader from "../components/Loader/Loader";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, loading, error } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  if (loading || !selectedCamper) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>{selectedCamper.name}</h2>
      <p>Location: {selectedCamper.location}</p>
      <p>Price: ${selectedCamper.price}</p>

      <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
