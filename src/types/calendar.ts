import { Event as BigCalendarEvent } from "react-big-calendar";

export interface Event extends BigCalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export interface Trainer {
  id: number;
  name: string;
  checked: boolean;
}

export interface Class {
  id: number;
  name: string;
  checked: boolean;
}

export interface Facility {
  id: number;
  name: string;
  checked: boolean;
  warning?: boolean;
}

export type AppointmentsType = "booked" | "non-booked" | "both";

export interface FiltersType {
  trainers: Trainer[];
  classes: Class[];
  appointments: AppointmentsType;
  facilities: Facility[];
}