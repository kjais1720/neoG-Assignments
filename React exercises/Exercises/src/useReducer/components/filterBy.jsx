import { useProduct } from "../product-context";
export const FilterBy = () => {
  const {state, dispatch} = useProduct();
  const {filters} = state;
  const changeHandler = (e)=>{
    const type = e.target.getAttribute('data-type');
    const name = e.target.name;

      let value;
      if ( name !== "priceLimit" ) {
        value = !filters[name] 
      } else{
        value = e.target.value;
      }
      const payload = {name, value};
      console.log(payload);
      dispatch({type,payload});
  }
  return (
    <section>
      <fieldset>
          <legend>Filter by</legend>
          <label>
            <input
              onChange={e=> changeHandler(e)} data-type="filterBy" checked={filters.includeOutOfStock} type="checkbox" name="includeOutOfStock" value={filters.includeOutOfStock} id="" />
            include 'out of stock'
          </label>
          <label>
            <input
              onChange={e=> changeHandler(e)} data-type="filterBy" checked={filters.fastDelivery} type="checkbox" name="fastDelivery" value={filters.fastDelivery} id="" />
            fast delivery only
          </label>
          <br />
          <br />
          <label>
            Price range
            <input
              onChange={e=> changeHandler(e)}
              name="priceLimit"
              style={{ width: "300px" }}
              data-type="filterBy"
              type="range"
              min="0"
              max="1000"
              value={filters.priceLimit}
              list="tickmarks"
              step="100"
              id=""
            />
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
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
          </label>
      </fieldset>
    </section>
  );
};
