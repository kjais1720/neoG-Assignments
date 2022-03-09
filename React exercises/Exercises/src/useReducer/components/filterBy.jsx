import { useProduct } from "../product-context";
export const FilterBy = () => {
  const { state, dispatch } = useProduct();
  const { includeOutOfStock, priceLimit, fastDelivery } = state;
  const changeHandler = (e) => {
    const type = e.target.getAttribute("data-type");
    const name = e.target.name;
    let value;
    if (name !== "priceLimit") {
      value = !state[name];
    } else {
      value = e.target.value;
    }
    const payload = { name, value };
    dispatch({ type, payload });
  };
  return (
    <section>
      <fieldset>
        <legend>Filter by</legend>
        <label>
          <input
            onChange={(e) => changeHandler(e)}
            data-type="filterBy"
            checked={includeOutOfStock}
            type="checkbox"
            name="includeOutOfStock"
            value={includeOutOfStock}
            id=""
          />
          include 'out of stock'
        </label>
        <label>
          <input
            onChange={(e) => changeHandler(e)}
            data-type="filterBy"
            checked={fastDelivery}
            type="checkbox"
            name="fastDelivery"
            value={fastDelivery}
            id=""
          />
          fast delivery only
        </label>
        <br />
        <br />
        <label>Price range</label>
        <div className="input-group" style={{ width: "300px" }}>
          {/* <div
            style={{
              padding: "5px",
              backgroundColor: "red",
              width: "fit-content",
              position:"relative",
              left:`${filters.priceLimit/10}%`,
              transform:`translateX(-50%)`
            }}
          >
            {filters.priceLimit}
          </div> */}
          <input
            onChange={(e) => changeHandler(e)}
            name="priceLimit"
            style={{ width: "100%" }}
            data-type="filterBy"
            type="range"
            min="100"
            max="1000"
            value={priceLimit}
            list="tickmarks"
            step="100"
            id=""
          />
          <datalist id="tickmarks">
            <option value="100" label="100"></option>
            <option value="200" label="200"></option>
            <option value="300" label="300"></option>
            <option value="400" label="400"></option>
            <option value="500" label="500"></option>
            <option value="600" label="600"></option>
            <option value="700" label="700"></option>
            <option value="800" label="800"></option>
            <option value="900" label="900"></option>
            <option value="1000" label="1000"></option>
          </datalist>
          <p
            style={{
              margin: "0",
              padding: "0",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span style={{ fontSize: "0.6rem" }}>100</span>
            <span style={{ fontSize: "0.6rem" }}>200</span>
            <span style={{ fontSize: "0.6rem" }}>300</span>
            <span style={{ fontSize: "0.6rem" }}>400</span>
            <span style={{ fontSize: "0.6rem" }}>500</span>
            <span style={{ fontSize: "0.6rem" }}>600</span>
            <span style={{ fontSize: "0.6rem" }}>700</span>
            <span style={{ fontSize: "0.6rem" }}>800</span>
            <span style={{ fontSize: "0.6rem" }}>900</span>
            <span style={{ fontSize: "0.6rem" }}>1000</span>
          </p>
        </div>
      </fieldset>
    </section>
  );
};
