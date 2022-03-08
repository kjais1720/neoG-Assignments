const sortByPrice = (list, order) => {
    let sortedList = [...list];
    sortedList.sort((a, b) => Number(a.price) - Number(b.price));
    switch (order) {
      case "priceAsc":
        return sortedList;
      case "priceDesc":
        return sortedList.reverse();
      default:
        return [...list];
    }
  };
  
  
  const filterProducts = (list, filters) => {
    let updatedList = list;
    for(const filter in filters){
      switch(filter){
        case "includeOutOfStock":
          updatedList = filters.includeOutOfStock ? updatedList : updatedList.filter(item=> item.inStock) ;
          break;
        case 'fastDelivery':
          updatedList = filters.fastDelivery ? updatedList.filter(item => item.fastDelivery ) : updatedList;
          break;
        case 'priceLimit':
          updatedList = updatedList.filter(item=> Number(item.price) <= Number(filters.priceLimit))
          break;
        default:
          break;
      }
    }
    return updatedList;
  }

  export const applyFilterAndSorts = (state) => {
    const { originalList, sortBy, filters } = state;
    let updatedList = sortByPrice(originalList,sortBy);

    updatedList = filterProducts(updatedList, filters);
    return updatedList;
  }
  
  export const reducer = (state, action) => {
    const { type, payload } = action;
    const { filters } = state;
    let newList;
    switch (type) {
      case "sortBy":
        return { ...state, sortBy: payload };
      case "filterBy":
        return {...state, filters:{...filters,[payload.name]:payload.value}};
      case 'resetFilter':
        return { ...state,
          sortBy:'',
          filters:{
            includeOutOfStock:true,
            fastDelivery: false,
            priceLimit: Infinity
          } 
        };
      default:
        return{...state};
    }
  };
  