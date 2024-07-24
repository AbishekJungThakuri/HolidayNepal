import { createContext, useState, useEffect, act } from 'react';
import destinations from '../assets/Data/populardestination';
import { fetchPlaces, fetchActivities, fetchEvents } from '../assets/Data/backend_data';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [allPlaces, setAllPlaces] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  const [categoryPlaces, setCategoryPlaces] = useState({});
  const [count, setCount] = useState({});
  const [error, setError] = useState(null);

  // Api fetching
  useEffect(() => {
    const getData = async () => {
      const places = await fetchPlaces();
      const events = await fetchEvents();
      const activities = await fetchActivities();
      if (places && activities && places) {
        // Combine data
        const combinedData = [
          ...places.map(item => ({ ...item, category: 'places' })),
          ...activities.map(item => ({ ...item, category: 'activities' })),
          ...events.map(item => ({ ...item, category: 'events' }))
        ];

        // Set states
        setAllPlaces(places);
        setAllActivities(activities);
        setAllEvents(events);

         // Initialize categories and counts
         const categories = combinedData.reduce((acc, item) => {
          const category = item.category || 'Uncategorized'; // Default category if not present
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {});

        const initialCounts = Object.keys(categories).reduce((acc, category) => {
          acc[category] = 10;
          return acc;
        }, {});

        setCategoryPlaces(categories);
        setCount(initialCounts);

      } else {
        setError('Failed to fetch data');
      }
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
    allActivities,
    allEvents,
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