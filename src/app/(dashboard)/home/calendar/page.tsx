"use client";

import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FilterComponent from "../../../../components/calendar/Filter";
import MainCalendar from "../../../../components/calendar/MainCalendar";
import { Event, Filters as FiltersType } from "../../../../types/calendar";
import { useDrawer } from "../../../../hooks/drawer";

const initialEvents: Event[] = [
  { id: "1", title: "Event 1", start: new Date(), end: new Date() },
  { id: "2", title: "Event 2", start: new Date(), end: new Date() },
];

const CalendarPage: React.FC = () => {
  const [filters, setFilters] = useState<FiltersType>({ trainers: [], classes: [], appointments: [], categories: [] });
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const { openDrawer } = useDrawer();

  const handleFilterChange = (type: keyof FiltersType, value: string, isChecked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [type]: isChecked
        ? [...prev[type], value]
        : prev[type].filter((v) => v !== value),
    }));
  };

  const handleAddEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const handleUpdateEvent = (updatedEvent: Event) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
        <Typography variant="h4">Calendar</Typography>
        <Button variant="contained" color="primary" onClick={() => openDrawer("add")}>
          Create Event
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{xs:12, md:2}}>
          
            <FilterComponent />
          
        </Grid>
        <Grid size={{xs:12, md:10}}>
          
            <MainCalendar
              events={events}
              onNavigate={() => {}}
              onSelectEvent={(event) => console.log(event)}
            />
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalendarPage;