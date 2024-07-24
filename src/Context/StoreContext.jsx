import { createContext, useState, useEffect } from 'react';
import destinations from '../assets/Data/populardestination';
import { fetchPlaces } from '../assets/Data/backend_data';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [allPlaces, setAllPlaces] = useState([]);
  const [categoryPlaces, setCategoryPlaces] = useState({});
  const [count, setCount] = useState({});
  const [error, setError] = useState(null);

  // Api fetching
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPlaces();
      // console.log(data)
      if (data) {
        setAllPlaces(data);
      } else {
        setError('Failed to fetch places');
      }

    //  Initializing places Category and counts
    const categories = data.reduce((acc, place) => {
      if (!acc[place.category]) {
        acc[place.category] = [];
      }
      acc[place.category].push(place);
      return acc;
    }, {});

    const initialCounts = Object.keys(categories).reduce((acc, category) => {
      acc[category] = 10;
      return acc;
    }, {});

    setCategoryPlaces(categories);
    setCount(initialCounts);
  };
    getData();
  }, []);

  // Handling LoadMore Button

  const handleLoadMore = (category) => {
    setCount((prevCount) => ({
      ...prevCount,
      [category]: prevCount[category] + 10
    }));
  };

  console.log(handleLoadMore)

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (allPlaces.length === 0) {
    return <div>Not Found</div>;
  }

  const contextValue = {
    destinations,
    count,
    allPlaces,
    handleLoadMore,
    categoryPlaces,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;