import React, { useEffect, useState } from "react";
import { setFilters } from "../../redux/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const equipmentOptions = [
    { label: "AC", name: "AC", value: "true" },
    { label: "Automatic", name: "transmission", value: "true" },
    { label: "Kitchen", name: "kitchen", value: "true" },
    { label: "TV", name: "TV", value: "true" },
    { label: "Bathroom", name: "bathroom", value: "true" },
  ];

  const typeOptions = [
    { label: "Van", value: "panelTruck" },
    { label: "Fully Integrated", value: "fullyIntegrated" },
    { label: "Alcove", value: "alcove" },
  ];

  const [draftFilters, setDraftFilters] = useState({});
  const [searchParam, setSearchParam] = useSearchParams();

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    setDraftFilters(filters);
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engeller
    const params = {};
    Object.entries(draftFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params[key] = value;
      }
    });
    setSearchParam(params);
    dispatch(setFilters(draftFilters));
  };

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;

    setDraftFilters((prev) => {
      const updated = { ...prev };
      if (type === "checkbox") {
        if (checked) {
          // transmission özel durumu
          updated[name] = name === "transmission" ? "automatic" : true;
        } else {
          // ❌ checkbox kaldırıldı → key'i sil
          delete updated[name];
        }
      } else if (type === "radio") {
        // radio
        if (updated[name] === value) {
          delete updated[name]; // 🔁 toggle off
        } else {
          updated[name] = value; // 🔁 select
        }
      } else {
        updated[name] = value;
      }
      return updated;
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-grid",
        }}
      >
        <label>Location</label>
        <input
          name="location"
          placeholder="Location"
          value={draftFilters.location || ""}
          onChange={handleChange}
        />
        <span>Vehicle Equipment:</span>
        {equipmentOptions.map((option) => (
          <div key={option.name}>
            <input
              type="checkbox"
              name={option.name}
              value={option.name === "transmission" ? "automatic" : "true"}
              checked={Boolean(draftFilters[option.name])}
              onChange={handleChange}
            />
            <label>{option.label}</label>
          </div>
        ))}

        <span>Vehicle Type:</span>
        {typeOptions.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              name="form"
              value={option.value}
              checked={draftFilters.form === option.value}
              onClick={handleChange}
            />
            <label>{option.label}</label>
          </div>
        ))}

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filters;
