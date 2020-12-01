import React from 'react';
import './CalendarDay.css';
import dayjs from "dayjs";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import ScreenReaderText from "../ScreenReaderText/ScreenReaderText";

type CalendarDayProps = {
    date: any,
    events: [any]
};

const CalendarDay = ({date, events}: CalendarDayProps) => {
    const classNames = ['c-calendar-day'];
    const isSunday = date.weekday() === 0;
    const isToday = date.isSame(dayjs(), 'date');

    if (isSunday) {
        classNames.push('c-calendar-day--is-sunday');
    }

    if (isToday) {
        classNames.push('c-calendar-day--is-today');
    }

    return (
        <div className={classNames.join(' ')}>
            <div className="c-calendar-day__head">{date.format('ddd DD')}</div>
            <div className="c-calendar-day__body">
                {events.map((event, index) => <CalendarEvent key={index} {...event}/>)}
                {!events.length && <ScreenReaderText text="No events"/>}
            </div>
        </div>
    );
}

export default CalendarDay;