fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const fetchPlaces = async () => {
    return fetchData('http://127.0.0.1:5000/data/places')
};


export const fetchCities = async () => {
    return fetchData('http://127.0.0.1:5000/data/cities')
};


export const fetchAccommodations = async () => {
    return fetchData('http://127.0.0.1:5000/data/accmmodations')
};


// Code to use in components :

// const [places, setPlaces] = useState([]);

// useEffect(() => {
// const getData = async () => {
//     const data = await fetchPlaces();
//     setPlaces(data);
// };

// getData();
// }, []);


// Json structure

// Places
/*
    id:
    name:
    description:
    type: "Historic, Religious, Cultural"
    city_id:
    image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Kathmandu-Swambhuinath.jpg"
    places:
    activities : "Climbing, Worship, Circumambulating"
    longitude:
    latitude:
    rating: 
    required_time:
    fee:
*/

// Cities
/*
    id:
    name:
    description:
    image:
    rating: 
    longitude:
    latitude:
    traffic_cost:
    traffic_time:
*/

// Acommodations
/*
city_id: 1
cost: 4500
id:	1
name : "Himalayan Oasis Hotel"
popularity: 8
type: "Luxurious"
*/