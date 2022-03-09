export const findMaximumPrice = (productList) =>
  Math.round(
    productList.reduce(
      (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
      0
    )
  );

const sortByPrice = (list, { sortBy }) => {
  let sortedList = [...list];
  sortedList.sort((a, b) => Number(a.price) - Number(b.price));
  switch (sortBy) {
    case "priceAsc":
      return sortedList;
    case "priceDesc":
      return sortedList.reverse();
    default:
      return [...list];
  }
};

const filterOutOfStock = (list, { includeOutOfStock }) => {
  let updatedList = [...list];
  updatedList = includeOutOfStock
    ? updatedList
    : updatedList.filter((item) => item.inStock);
  return updatedList;
};

const filterFastDelivery = (list, { fastDelivery }) => {
  let updatedList = [...list];
  updatedList = fastDelivery
    ? updatedList.filter((item) => item.fastDelivery)
    : updatedList;
  return updatedList;
};

const filterByPrice = (list, { priceLimit }) => {
  let updatedList = [...list];
  updatedList = updatedList.filter(
    (item) => Number(item.price) <= Number(priceLimit)
  );
  return updatedList;
};

const functionalChaining = (filterParams, ...functions) => (productsList) => {
  return functions.reduce(
    (accum, curr) => curr(accum, filterParams),
    productsList
  );
};

export const applyFilterAndSorts = (state) => {
  const {
    originalList,
    sortBy,
    includeOutOfStock,
    fastDelivery,
    priceLimit
  } = state;
  const composedFunctions = functionalChaining(
    { sortBy, includeOutOfStock, fastDelivery, priceLimit },
    sortByPrice,
    filterOutOfStock,
    filterFastDelivery,
    filterByPrice
  );

  let updatedList = composedFunctions(originalList);
  return updatedList;
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "sortBy":
      return { ...state, sortBy: payload };
    case "filterBy":
      return {
        ...state,
        [payload.name]: payload.value
      };
    case "resetFilter":
      return {
        ...state,
        sortBy: "",
        includeOutOfStock: false,
        fastDelivery: false,
        priceLimit: findMaximumPrice(state.originalList)
      };
    default:
      return { ...state };
  }
};
