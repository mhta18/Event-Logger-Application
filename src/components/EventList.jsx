
function EventList({ events, onSelectEvent }) {
    return (
        <div className="event-list">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="event-item"
                    onClick={() => onSelectEvent(event)}
                >
                    {event.title}
                </div>
            ))}
        </div>
    );
}

export default EventList;
 