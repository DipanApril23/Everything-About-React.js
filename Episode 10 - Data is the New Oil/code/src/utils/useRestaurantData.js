import { useEffect, useState } from "react";
import { API } from "../utils/constants";

const useRestaurantData = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const fetchData = async () => {
      try {
        const data = await fetch(API);
        const json = await data.json();
        // optional chaining:-
        const restaurants =
          json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
        setRestaurantList(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
        fetchData();
      }, []);
  
      return [restaurantList, filteredRestaurants, setFilteredRestaurants];
  };
  
  
  export default useRestaurantData;


