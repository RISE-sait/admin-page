import Drawer from "@mui/material/Drawer/Drawer";
import React from "react";

export default function RightDrawer({
  children,
  drawerOpen,
  handleDrawerClose,
  drawerWidth = "50%", // add a default width, can be overridden
}: {
  drawerOpen: boolean;
  handleDrawerClose: () => void;
  children: React.ReactNode | null;
  drawerWidth?: string; // optional prop
}) {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerClose}
      PaperProps={{ style: { width: drawerWidth } }}
    >
      {children}
    </Drawer>
  );
}