import "./styles/FilterBar.css";
export const FilterBar = ({ setShowFilter }) => {
  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className="filterContainer"
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <h5 id="drawer-disable-body-scrolling-label" className="filterHeader">
          Filters
        </h5>
        <button
          type="button"
          onClick={() => setShowFilter(false)}
          data-drawer-dismiss="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="filterCloseBtn"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Filters</span>
        </button>
        <div className="filterDivider"></div>
        <div className="filterBodyContainer">
          <ul className="filterList">
            <li className="filterListItem">
              <p className="filterListHeader my-1">Sort by</p>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("sort change")}
                  checked={false}
                  id="price-sort-1"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="filterRadioInput"
                />
                <label htmlFor="price-sort-1" className="filterRadioLabel">
                  Price - Low to High
                </label>
              </div>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("Price Sort Changed")}
                  checked={false}
                  id="price-sort-2"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="filterRadioInput"
                />
                <label htmlFor="price-sort-2" className="filterRadioLabel">
                  Price - High to Low
                </label>
              </div>
            </li>
            <li className="filterListItem">
              <span className="filterListHeader">Rating</span>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("Rating Change")}
                  checked={false}
                  id="rating-sort-1"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="filterRadioInput"
                />
                <label htmlFor="rating-sort-1" className="filterRadioLabel">
                  5 Stars
                </label>
              </div>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("Rating change")}
                  checked={false}
                  id="rating-sort-1"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="filterRadioInput"
                />
                <label htmlFor="rating-sort-1" className="filterRadioLabel">
                  4 Stars & Above
                </label>
              </div>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("rating change")}
                  checked={false}
                  id="rating-sort-2"
                  type="radio"
                  value=""
                  name="rating-sort"
                  className="filterRadioInput"
                />
                <label htmlFor="rating-sort-2" className="filterRadioLabel">
                  3 Stars & Above
                </label>
              </div>
            </li>
            <li className="filterListItem">
              <span className="filterListHeader">Other Filters</span>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("megs picks change")}
                  id="megs-picks"
                  type="checkbox"
                  checked={false}
                  value=""
                  className="filterCheckboxInput"
                />
                <label htmlFor="megs-picks" className="filterRadioLabel">
                  Meg's Picks
                </label>
              </div>
              <div className="filterListItemContainer">
                <input
                  onChange={() => console.log("Vegan Changed")}
                  id="only-vegan"
                  type="checkbox"
                  checked={false}
                  value=""
                  className="filterCheckboxInput"
                />
                <label htmlFor="only-vegan" className="filterRadioLabel">
                  Vegan
                </label>
              </div>
            </li>
            <li className="filterListItem px-1">
              <button
                onClick={() => console.log("clear filter")}
                type="button"
                className="filterClearBtn"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
