"use client";

import {
  ManageAccounts,
  ExpandLess,
  ExpandMore,
  People,
  Class as ClassIcon,
  Store as StoreIcon,
  BarChart as BarChartIcon,
  CardMembership as MembershipIcon,
  LocalConvenienceStore as LocalConvenienceStoreIcon,
  SportsBasketball as SportsBasketballIcon,
  Dashboard as DashboardIcon,
  CalendarMonth as CalendarIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function HomeSubMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Manage Section */}
      <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
        <ListItemIcon>
            <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
        {isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Manage Submenu */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Dashboard */}
          <ListItemButton component={Link} href="/home/dashboard" sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* Classes */}
          <ListItemButton component={Link} href="/home/calendar" sx={{ pl: 4 }}>
            <ListItemIcon>
                <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>

          
        </List>
      </Collapse>
    </>
  );
}
