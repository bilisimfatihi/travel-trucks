const CamperCard = ({ camper }) => {
  return (
    <li>
      <h3>
        {camper.id}.{camper.name}
      </h3>
      <p>Location: {camper.location}</p>
      <p>Price per day: ${camper.price}</p>
    </li>
  );
};

export default CamperCard;
