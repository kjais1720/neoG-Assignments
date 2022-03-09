import React from "react";
import { FilterBy } from "./components/filterBy";
import { SortBy } from "./components/sortBy";
import { useProduct } from "./product-context";

export default function ProductsPage() {
  const { finalProductsList, dispatch } = useProduct();

  return (
    <>
      <div>
        <form>
          <SortBy />
          <FilterBy />
          <button
            style={{ margin: "5px auto", padding: "10px", borderColor: "red" }}
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "resetFilter", payload: "" });
            }}
          >
            Reset all Filters
          </button>
        </form>
        <h2>Total Products : {finalProductsList.length}</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {finalProductsList.map(
            ({
              id,
              name,
              image,
              price,
              productName,
              inStock,
              level,
              fastDelivery
            }) => (
              <div
                key={id}
                style={{
                  border: "1px solid #4B5563",
                  borderRadius: "0 0 0.5rem 0.5rem",
                  margin: "1rem",
                  flexBasis: "200px",
                  maxWidth: "350px",
                  padding: "0 0 1rem"
                }}
              >
                <img src={image} width="100%" height="auto" alt={productName} />
                <h3> {name} </h3>
                <div>Rs. {price}</div>
                {inStock && <div style={{ color: "green" }}> In Stock </div>}
                {!inStock && <div style={{ color: "red" }}> Out of Stock </div>}
                <div>{level}</div>
                {fastDelivery ? (
                  <div style={{ color: "green" }}> Fast Delivery </div>
                ) : (
                  <div style={{ color: "red" }}> 3 days minimum </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
