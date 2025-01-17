import { Event as BigCalendarEvent } from "react-big-calendar";

export interface Event extends BigCalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export interface Filters {
  trainers: string[];
  classes: string[];
  appointments: string[];
  categories: string[];
}