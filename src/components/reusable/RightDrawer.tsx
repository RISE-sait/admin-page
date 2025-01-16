import Drawer from "@mui/material/Drawer/Drawer";
import React from "react";

export default function RightDrawer({
    children,
    drawerOpen,
    handleDrawerClose,
}: {
    drawerOpen: boolean;
    handleDrawerClose: () => void;
    children: React.ReactNode | null
}) {
    return (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            PaperProps={{ style: { width: '50%' } }}
        >
            {children}
        </Drawer>
    )
}