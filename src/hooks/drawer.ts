import { useState } from "react";
import { Event } from "../types/calendar";

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<"details" | "add" | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const openDrawer = (content: "details" | "add", event?: Event) => {
    setDrawerContent(content);
    setSelectedEvent(event || null);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerContent(null);
    setSelectedEvent(null);
  };

  return { drawerOpen, drawerContent, selectedEvent, openDrawer, closeDrawer };
};