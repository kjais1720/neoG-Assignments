import { useReducer, useContext, createContext } from "react";
import { reducer, applyFilterAndSorts, findMaximumPrice } from "./utils";
import faker from "faker";

faker.seed(123);

const data = [...Array(50)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

const ProductContext = createContext({});

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    originalList: data,
    sortBy: "",
    includeOutOfStock: false,
    fastDelivery: false,
    priceLimit: findMaximumPrice(data)
  });
  const finalProductsList = applyFilterAndSorts(state);

  return (
    <ProductContext.Provider value={{ finalProductsList, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
