import { createContext, useState, useEffect } from 'react';
import destinations from '../assets/Data/populardestination';
// import { fetchPlaces } from '../assets/Data/backend_data';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  // const [places, setPlaces] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchPlaces();
  //     console.log(data);
  //     setPlaces(data);
  //   };
  //   getData();
  // }, []);


  // const contextValue = {
  //   destinations,
  //   fetchPlaces,
  //   places,
  //   setPlaces,
  // };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;
