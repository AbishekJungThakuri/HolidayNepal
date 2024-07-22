import { createContext } from "react";
import destinations from "../assets/Data/populardestination";


export const storeContext = createContext(null);


const StoreContextProvider = (props) =>{



    const contextValue = {
      destinations,
    }

    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider;