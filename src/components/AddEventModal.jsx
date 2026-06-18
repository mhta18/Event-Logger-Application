import {useState } from "react";

function AddEventModal({onAddEvent, onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");
    const [dateTime, setDateTime] = useState("");

    const newEvent = {
        id: Date.now(),
        title,
        dateTime,
        description,
        details,
    };

    return (
        <dialog open className="modal">
            <form className="modal-form" method="dialog" onSubmit={(e) => {
                e.preventDefault();
                onAddEvent(newEvent);
            }}>
                <h2>Add New Event</h2>

                <input
                    type="text"
                    placeholder="Event Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Event Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>

                <textarea
                    placeholder="Event Details"
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>

                <div className="modal-actions">
                    <button type="submit">Add Event</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </dialog>
    );
}

export default AddEventModal;