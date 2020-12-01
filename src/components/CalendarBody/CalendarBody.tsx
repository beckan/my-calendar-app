import React, {forwardRef, useEffect, useState} from 'react';
import './CalendarBody.css';
import getDatesInWeek from "../../utils/getDatesInWeek";
import CalendarDay from "../CalendarDay/CalendarDay";
import ScreenReaderText from "../ScreenReaderText/ScreenReaderText";
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

type CalendarBodyProps = {
    startDate: dayjs.ConfigType,
    isLoading: boolean,
    events: any
};

const CalendarBody = forwardRef<HTMLDivElement, CalendarBodyProps>(({startDate, isLoading, events}, ref) => {
    const [dates, setDates] = useState<dayjs.ConfigType[]>([]);

    useEffect(() => {
        setDates(getDatesInWeek(startDate));
    }, [startDate]);

    const classNames = ['c-calendar-body'];

    if (isLoading) {
        //TODO: We need better loading experience
        classNames.push('c-calendar-body--is-loading');
    }

    const calendarDayList = dates.map((date, index) => {
        let dayEvents = [];

        if (dayjs.isDayjs(date)) {
            dayEvents = events[date.format('YYYY-MM-DD')] || [];
        }

        return <CalendarDay date={date} key={index} events={dayEvents}/>;
    });

    return (
        <>
            <div className={classNames.join(' ')} tabIndex={-1} ref={ref}>
                <ScreenReaderText text={dayjs.isDayjs(startDate) ? startDate.format('[Viewing week ] w [of] YYYY') : ''}/>
                {dates && calendarDayList}
            </div>
        </>
    );
});

export default CalendarBody;