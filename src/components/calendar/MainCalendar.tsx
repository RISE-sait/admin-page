import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Event } from "../../types/calendar";

const localizer = momentLocalizer(moment);

interface MainCalendarProps {
  events: Event[];
  onNavigate: (date: Date) => void;
  onSelectEvent: (event: Event) => void;
}

const MainCalendar: React.FC<MainCalendarProps> = ({
  events,
  onNavigate,
  onSelectEvent,
}) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 820 }}
      views={["month", "week", "day"]}
      onNavigate={onNavigate}
      onSelectEvent={(event: Event) => onSelectEvent(event)}
    />
  );
};

export default MainCalendar;