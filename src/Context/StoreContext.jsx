import { createContext, useState, useEffect } from 'react';
import destinations from '../assets/Data/populardestination';
import { fetchPlaces } from '../assets/Data/backend_data';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      const getData = async () => {
          const data = await fetchPlaces();
          // console.log(data)
          if (data) {
              setPlaces(data);
          } else {
              setError('Failed to fetch places');
          }
      };
      getData();
  }, []);

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (places.length === 0) {
      return <div>Not Found</div>;
  }

  const contextValue = {
    destinations,
    places,
    setPlaces,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;