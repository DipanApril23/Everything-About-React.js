import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine); 

    // check if Online or Offline
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffline = () => {
            setIsOnline(false);
        }

        //Event Listeners
        window.addEventListener("online" , handleOnline);
        window.addEventListener("offline" , handleOffline);

        //Cleanup - Taught in Live Class
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    //boolean value
    return isOnline;
}

export default useOnlineStatus;    