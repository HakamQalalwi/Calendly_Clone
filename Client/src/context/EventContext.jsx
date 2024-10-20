// EventContext.jsx
import { createContext, useContext, useState } from "react";

const EventContext = createContext();
export const useData = () => useContext(EventContext);

export const EventContextProvider = ({ children }) => {
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
    const [selectedEvent, setSelectedEvent] = useState(null); // Store the selected event for editing

    const createEvent = (newEvent) => {
        setUserEvents((prevData) => [...prevData, newEvent]);
    };

    const updateEvent = (updatedEvent) => {
        setUserEvents((prevData) =>
            prevData.map((event) =>
                event.id === updatedEvent.id ? updatedEvent : event
            )
        );
    };

    return (
        <EventContext.Provider
            value={{
                eventData,
                setEventData,
                userEvents,
                createEvent,
                updateEvent,
                selectedEvent,
                setSelectedEvent,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
