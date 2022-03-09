import { useProduct } from "../product-context";

export const SortBy = () => {
  const {
    state: { sortBy },
    dispatch
  } = useProduct();
  const changeHandler = (e) => {
    dispatch({ type: "sortBy", payload: e.target.value });
  };
  return (
    <section>
      <div>
        <div className="input-group">
          <fieldset>
            <legend>Sort By:</legend>
            <label>
              <input
                checked={sortBy === "priceAsc"}
                onChange={(e) => changeHandler(e)}
                value="priceAsc"
                type="radio"
                name="price"
                id=""
              />
              Price low-to-high
            </label>
            <label>
              <input
                onChange={(e) => changeHandler(e)}
                checked={sortBy === "priceDesc"}
                value="priceDesc"
                type="radio"
                name="price"
                id=""
              />
              Price high-to-low
            </label>
          </fieldset>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};
