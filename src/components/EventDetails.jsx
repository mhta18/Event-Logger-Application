function EventDetails({ event }) {
  if (!event) {
    return <p>Select an event to view details</p>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.dateTime}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Details:</strong> {event.details}</p>
    </div>
  );
}

export default EventDetails;
 