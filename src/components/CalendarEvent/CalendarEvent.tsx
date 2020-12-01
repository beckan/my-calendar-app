import React from 'react';
import './CalendarEvent.css';

type CalendarEventProps = {
    title: string
};

const CalendarEvent = ({title}: CalendarEventProps) => {
    return (
        <div className="c-calendar-event">
            {title}
        </div>
    );
}

export default CalendarEvent;