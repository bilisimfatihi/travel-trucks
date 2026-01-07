import React, { useEffect, useState } from "react";
import { setFilters } from "../../redux/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { EQUIPMENT_OPTIONS, TYPE_OPTIONS } from "../../constants/const";
import styles from "./Filters.module.css";

const Filters = () => {
  const [draftFilters, setDraftFilters] = useState({});
  const [searchParam, setSearchParam] = useSearchParams();

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    setDraftFilters(filters);
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className={styles.location}>
          <label>Location</label>
          <div className={styles["input-group"]}>
            <svg className={styles["input-icon"]}>
              <use href="/icons.svg#map-grey"></use>
            </svg>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={draftFilters.location || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className={styles.title}>Filters</p>
        <div className={styles.selections}>
          <p>Vehicle Equipment</p>
          <hr className={styles.hr} />
          <div className={styles.options}>
            {EQUIPMENT_OPTIONS.map((option) => (
              <div key={option.name}>
                <label>
                  <input
                    type="checkbox"
                    className="hidden"
                    name={option.name}
                    value={
                      option.name === "transmission" ? "automatic" : "true"
                    }
                    checked={Boolean(draftFilters[option.name])}
                    onChange={handleChange}
                  />
                  <div className={styles.option}>
                    <span>
                      <svg className={styles.icon}>
                        <use href={`/icons.svg#${option.icon}`}></use>
                      </svg>
                    </span>
                    <span className={styles.label}>{option.label}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.selections}>
          <p>Vehicle Type</p>
          <hr className={styles.hr} />
          <div className={styles.options}>
            {TYPE_OPTIONS.map((option) => (
              <div key={option.value}>
                <label>
                  <input
                    type="radio"
                    className="hidden"
                    name="form"
                    value={option.value}
                    checked={draftFilters.form === option.value}
                    onClick={handleChange}
                  />
                  <div className={styles.option}>
                    <span>
                      <svg className={styles.icon}>
                        <use href={`/icons.svg#${option.icon}`}></use>
                      </svg>
                    </span>
                    <span className={styles.label}>{option.label}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
