import { useState } from "react";

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<"details" | "add" | null>(null);

  const openDrawer = (content: "details" | "add") => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerContent(null);
  };

  return { drawerOpen, drawerContent, openDrawer, closeDrawer };
};
