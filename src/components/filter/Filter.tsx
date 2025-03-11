import { FC } from "react";
import Searchbar from "./Searchbar";
import Year from "./Year";

const Filter: FC = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home-text-container">
        <h1 className="text-4xl font-extrabold">Cars Catalog</h1>
        <p>Discover cars you may like</p>
      </div>
      <div className="home-filters">
        <Searchbar />
        <div className="home-filter-container mt-4 md:mt-0">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;
