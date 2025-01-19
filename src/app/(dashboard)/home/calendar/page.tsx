"use client";

import React, { useState } from "react";
import { Box, Button, Typography, Paper, IconButton, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FilterComponent from "../../../../components/calendar/Filter";
import MainCalendar from "../../../../components/calendar/MainCalendar";
import { Event, FiltersType } from "../../../../types/calendar";
import { useDrawer } from "../../../../hooks/drawer";
import RightDrawer from "src/components/reusable/RightDrawer";
import EventDetail from "src/components/calendar/EventDetail";
import AddEventForm from "src/components/calendar/AdEventForm"; // Corrected import path
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const initialEvents: Event[] = [
  { id: "1", title: "Event 1", start: new Date(), end: new Date() },
  { id: "2", title: "Event 2", start: new Date(), end: new Date() },
];

const CalendarPage: React.FC = () => {
  const [filters, setFilters] = useState<FiltersType>({
    trainers: [
      { id: 1, name: "Test Trainer", checked: true },
      { id: 2, name: "Trainer 2", checked: false },
      { id: 3, name: "Trainer 3", checked: false },
    ],
    classes: [
      { id: 1, name: "Ball Handling", checked: true },
      { id: 2, name: "IQ/Footwork/Spacing", checked: true },
      { id: 3, name: "IQ/Situational Drills", checked: true },
      { id: 4, name: "OPEN GYM/DROP IN", checked: true },
      { id: 5, name: "RISE PERFORMANCE", checked: true },
      { id: 6, name: "Shooting Class", checked: true },
    ],
    appointments: "booked",
    facilities: [
      { id: 1, name: "Check out Tryout location", checked: true },
      { id: 2, name: "Online Facility", checked: false, warning: true },
      { id: 3, name: "Prolific Sports House", checked: true },
      { id: 4, name: "Rise Facility - Calgary", checked: false, warning: true },
      { id: 5, name: "The Genesis Centre", checked: false },
    ],
  });
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const {
    drawerOpen,
    drawerContent,
    selectedEvent,
    openDrawer,
    closeDrawer,
  } = useDrawer();

  const [filterOpen, setFilterOpen] = useState(true);

  const handleFilterChange = (
    type: keyof FiltersType,
    value: string,
    isChecked: boolean
  ) => {
    setFilters((prev) => {
      if (type === "appointments") {
        // Directly set the appointment type
        return {
          ...prev,
          appointments: value as FiltersType["appointments"],
        };
      } else {
        // For trainers, classes, and facilities, update the 'checked' property
        return {
          ...prev,
          [type]: prev[type].map((item) =>
            item.name === value ? { ...item, checked: isChecked } : item
          ),
        };
      }
    });
  };

  const toggleSelectAllFacilities = (checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      facilities: prev.facilities.map((facility) => ({
        ...facility,
        checked,
      })),
    }));
  };

  const resetFilters = () => {
    setFilters((prev) => ({
      ...prev,
      trainers: prev.trainers.map((t) => ({ ...t, checked: true })),
      classes: prev.classes.map((cls) => ({ ...cls, checked: true })),
      appointments: "booked",
      facilities: prev.facilities.map((f) => ({ ...f, checked: true })),
    }));
  };

  const handleAddEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  const handleUpdateEvent = (updatedEvent: Event) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e))
    );
  };

  const handleSelectEvent = (event: Event) => {
    openDrawer("details", event);
  };

  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4">Calendar</Typography>
        <Button variant="contained" onClick={() => openDrawer("add")}>
          Create Event
        </Button>
      </Box>

      {/* Main Content */}
      <Grid container spacing={2}>
        {/* Filter Sidebar */}
        {filterOpen && (
          <Grid
            size={{xs:12,
            md:3,
            lg:2}}
            sx={{
              display: "flex",
            }}
          >
            <Paper
              sx={{
                position: "relative",
                transition: "width 0.3s",
                height: "fit-content",
                width: "100%",
              }}
            >
              {/* Toggle Button */}
              <IconButton
                onClick={toggleFilter}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: -24,
                  backgroundColor: "white",
                  boxShadow: 1,
                }}
              >
                <ChevronLeft />
              </IconButton>
              <FilterComponent
                filters={filters}
                onFilterChange={handleFilterChange}
                toggleSelectAllFacilities={toggleSelectAllFacilities}
                resetFilters={resetFilters}
              />
            </Paper>
          </Grid>
        )}

        {/* Main Calendar */}
        <Grid
          size={{xs:filterOpen ? 12 - 3 : 12,
          md:filterOpen ? 9 : 12,
          lg:filterOpen ? 10 : 12}}
        >
          <Paper sx={{ p: 2, position: "relative" }}>
            {/* Toggle Button when Filter is Closed */}
            {!filterOpen && (
              <IconButton
                onClick={toggleFilter}
                sx={{
                  position: "absolute",
                  top: 8,
                  left: -24,
                  backgroundColor: "white",
                  boxShadow: 1,
                }}
              >
                <ChevronRight />
              </IconButton>
            )}
            <MainCalendar
              events={events}
              onNavigate={() => {}}
              onSelectEvent={handleSelectEvent}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Right Drawer for Event Details and Add Event */}
      <RightDrawer
        drawerOpen={drawerOpen}
        handleDrawerClose={closeDrawer}
        drawerWidth={drawerContent === "details" ? "70%" : "30%"}
      >
        {drawerContent === "details" && selectedEvent && (
          <EventDetail event={selectedEvent} onClose={closeDrawer} />
        )}
        {drawerContent === "add" && (
          <AddEventForm onClose={closeDrawer} onAddEvent={handleAddEvent} />
        )}
      </RightDrawer>
    </Box>
  );
};

export default CalendarPage;