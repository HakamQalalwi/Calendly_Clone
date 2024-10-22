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
        availableSpots: 2
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

    const deleteEvent = (deletedEvent) => {
        setUserEvents((prevData) =>
            prevData.filter((event) => event.id !== deletedEvent.id
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
                deleteEvent,
                selectedEvent,
                setSelectedEvent,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
