import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import EventDetails from './components/EventDetails'
import AddEventModal from './components/AddEventModal';

const sampleEvents = [
  {
    id: 1,
    title: "Web Fundamentals Lecture",
    dateTime: "2026-03-05T10:00",
    description: "Introduction to React components, props, and state.",
    details: "Room 204, bring your laptop and notebook."
  },
  {
    id: 2,
    title: "Group Project Meeting",
    dateTime: "2026-03-06T14:30",
    description: "Discuss project requirements and divide tasks among team members.",
    details: "Meeting will be held on Google Meet."
  },
  {
    id: 3,
    title: "UI Design Workshop",
    dateTime: "2026-03-08T11:00",
    description: "Hands-on workshop focused on basic UI/UX principles.",
    details: "Design lab, second floor."
  },
  {
    id: 4,
    title: "Midterm Exam Review",
    dateTime: "2026-03-10T16:00",
    description: "Review session covering all topics for the midterm exam.",
    details: "Prepare your questions in advance."
  },
  {
    id: 5,
    title: "Hackathon Practice Session",
    dateTime: "2026-03-12T18:00",
    description: "Practice session for upcoming hackathon with mini challenges.",
    details: "Snacks and drinks will be provided."
  }
];



function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [events, setEvents] = useState(() => {
    // Load events from localStorage if available, otherwise use sample events
    const storedEvents = localStorage.getItem("events");
    
    return storedEvents ? JSON.parse(storedEvents) : sampleEvents;
  });

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setSelectedEvent(newEvent);
    setIsModalOpen(false);
  };

  return (
    <div className='app'>
      {/* // left side bar for event types and right side for event details */}
      <div className="layout">
      
        <SideBar
          events={events}
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            setIsModalOpen(false);
          }}
          onAddEvent={() => {
            setIsModalOpen(true);
          }}
        />
        <div className="event-details">
            <EventDetails event={selectedEvent} />
        </div>
        
        {isModalOpen && (
          <AddEventModal  onAddEvent = {handleAddEvent} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </div>
  )
}

export default App;
