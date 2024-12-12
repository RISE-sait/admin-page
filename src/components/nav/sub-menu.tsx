"use client"

import { ManageAccounts, ExpandLess, ExpandMore, People } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function SubMenu() {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
                <ListItemIcon>
                    <ManageAccounts />
                </ListItemIcon>
                <ListItemText primary="Manage" />
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Manage Submenu */}
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton
                        component={Link}
                        href="/manage/clients"
                        sx={{ pl: 4 }}
                    >
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Clients" />
                    </ListItemButton>
                    {/* Add more submenu items here if needed */}
                </List>
            </Collapse>
        </>
    )
}