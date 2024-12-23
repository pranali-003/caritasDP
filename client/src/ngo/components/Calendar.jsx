
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './styles/Calendar.css'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    // alert(`You clicked on: ${arg.dateStr}`);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        height={530} // Set height to 530px as per the container
        events={[
          { title: 'Event 1', start: '2024-09-10' },
          { title: 'Event 2', start: '2024-09-12' },
        ]}
        dayMaxEventRows={2} // Limit of events shown per day
        showNonCurrentDates={false} // Hide previous/next month days
      />
    </div>
  );
};

export default Calendar;
