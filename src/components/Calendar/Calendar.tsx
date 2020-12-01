import React, {useEffect, useRef, useState} from 'react';
import './Calendar.css';
import CalendarBody from "../CalendarBody/CalendarBody";
import getFirstDateOfWeek from "../../utils/getFirstDateOfWeek";
import axios from 'axios';
import ScreenReaderText from "../ScreenReaderText/ScreenReaderText";
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

const currentDate = dayjs();

type CalendarProps = {
    title: string
};

const Calendar = ({title}: CalendarProps) => {
    const [startDate, setStartDate] = useState<dayjs.ConfigType>(getFirstDateOfWeek(currentDate));
    const [events, setEvents] = useState<object>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const calendarBodyElmRef = useRef<HTMLDivElement>(null);

    const goToToday = () => {
        setStartDate(getFirstDateOfWeek(currentDate));
    };

    const goToPrevWeek = () => {
        const prevMonday = dayjs(startDate).subtract(7, 'day');
        setStartDate(getFirstDateOfWeek(prevMonday));
    };

    const goToNextWeek = () => {
        const nextMonday = dayjs(startDate).add(7, 'day');
        setStartDate(getFirstDateOfWeek(nextMonday));
    };

    // Load events from a mocked-api
    useEffect(() => {
        (async () => {
            setEvents({});
            setIsLoading(true);

            try {
                // TODO: Better handling of api-url
                const response = await axios.get('/my-calendar-app/events.json');
                setEvents(response.data);
            } catch (error) {
                // TODO: Here we need proper error handling
                console.error(error);
            } finally {
                setIsLoading(false);
            }

            // Setting focus to calendarBody element for better accessibility experience
            calendarBodyElmRef?.current?.focus();

        })();
    }, [startDate, calendarBodyElmRef]);

    // TODO: Do this better maybe?
    if (!dayjs.isDayjs(startDate)) {
        return <div>Error: No start date is set...</div>;
    }

    return (
        <div className="c-calendar" aria-label={title}>
            <div className="c-calendar__head">
                <div className="c-calendar__head-title">{startDate.format('MMM YYYY')}</div>
                <div className="c-calendar__head-nav">
                    <button onClick={goToPrevWeek} className="c-calendar__head-nav-button">
                        &lt;
                        <ScreenReaderText text="Go to previous week"/>
                    </button>
                    <button onClick={goToToday} className="c-calendar__head-nav-button c-calendar__head-nav-button--today">
                        <ScreenReaderText text="Go to "/> Today
                    </button>
                    <button onClick={goToNextWeek} className="c-calendar__head-nav-button">
                        &gt;
                        <ScreenReaderText text="Go to next week"/>
                    </button>
                </div>
            </div>
            <CalendarBody isLoading={isLoading} startDate={startDate} events={events} ref={calendarBodyElmRef} />
        </div>
    );
};

export default Calendar;