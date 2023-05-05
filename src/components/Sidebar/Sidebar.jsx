import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Datalist from "./Datalist";
import { directorData, genreData, yearData } from "./ListData";

const Sidebar = () => {
  const [flag, setFlag] = useState(false);
  console.log("flag:", flag);

  const setFilterBtn = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className={flag ? `${styles.active}` : ``}>
        <button
          onClick={setFilterBtn}
          className={styles.filterBtn}
        >
          Filter
        </button>
        <div className={styles.sidebar}>
          <h2>Add Filters Here</h2>

          {/* *Title Filter */}

          <div className={styles.filter}>
            <div>
              <label htmlFor="title">Filter by Title</label>
            </div>
            <input
              id="title"
              type="text"
              placeholder="Enter Title"
            />

            <button>Filter</button>
          </div>

          {/* *Director Filter */}

          <div className={styles.filter}>
            <div>
              <label htmlFor="director">Filter by Director</label>
            </div>
            <input
              id="director"
              type="text"
              placeholder="Enter Title"
              list="directors"
            />
            <Datalist
              listId={"directors"}
              list={directorData}
            />
            <button>Filter</button>
          </div>

          {/* *Year Filter */}

          <div className={styles.filter}>
            <div>
              <label htmlFor="year">Filter by Year</label>
            </div>
            <input
              id="year"
              type="text"
              placeholder="Enter Year"
              list="years"
            />
            <Datalist
              listId={"years"}
              list={yearData}
            />
            <button>Filter</button>
          </div>

          {/* *Genre Filter */}

          <div className={styles.filter}>
            <div>
              <label htmlFor="genre">Filter by Genre</label>
            </div>
            <select id="genre">
              {genreData.map((genre) => (
                <option
                  key={genre}
                  value={genre}
                >
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* *Sorting */}

          <div className={`${styles.filter} ${styles.sort}`}>
            <div>
              <label htmlFor="title">Sort By</label>
            </div>
            <button>Title</button>
            <button>Director</button>
            <button>Genre</button>
            <button>Year</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
