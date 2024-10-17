import {createContext, useContext, useState} from "react";

const EventContext = createContext();
export const useData = ()=> useContext(EventContext);

export const EventContextProvider= ({children}) =>{
    const [eventData, setEventData] = useState({
        name: '',
        type: '',
        location: '',
        description: '',
        link: '',
        duration: '',
        startDate: '',
    });
    const [userEvents, setUserEvents] = useState([]);

    const createEvent = (newEvent) => {
        setUserEvents((prevData) => [...prevData, newEvent]);
    };
    return(
        <EventContext.Provider value={{eventData, setEventData, userEvents, createEvent}}>
            {children}
        </EventContext.Provider>
    )

}
