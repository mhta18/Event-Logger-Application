import { useState } from "react";
import EventList from "./EventList";

function SideBar({ events, onSelectEvent, onAddEvent }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="side-bar">
            <h2>Side Bar</h2>

            <button className="add-event" onClick={onAddEvent}>
                Add New Event
            </button>

            <div className="event-list">
                <h3>Event List</h3>

                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <EventList
                    events={filteredEvents}
                    onSelectEvent={onSelectEvent}
                />
            </div>
        </div>
    );
}

export default SideBar;
 

