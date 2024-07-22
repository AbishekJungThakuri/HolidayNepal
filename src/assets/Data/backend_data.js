export const fetchPlaces = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/data/places");
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const fetchCities = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/data/cities");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const fetchAccommodations = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/data/accmmodations");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};


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