import React, { useState, FC } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment)

interface MyCalendarProps {}

const MyCalendar: FC<MyCalendarProps> = () => {
    const [events, setEvents] = useState<any[]>([])

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 800 }}
            />
        </div>
    )
}

export default MyCalendar
