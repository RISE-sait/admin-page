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

export default function ManageSubMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Manage Section */}
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
          {/* Clients */}
          <ListItemButton component={Link} href="/manage/clients" sx={{ pl: 4 }}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItemButton>

          {/* Classes */}
          <ListItemButton component={Link} href="/manage/classes" sx={{ pl: 4 }}>
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classes" />
          </ListItemButton>

          {/* Store */}
          <ListItemButton component={Link} href="/manage/store" sx={{ pl: 4 }}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Store" />
          </ListItemButton>

          {/* Facilities */}
          <ListItemButton component={Link} href="/manage/facilities" sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocalConvenienceStoreIcon />
            </ListItemIcon>
            <ListItemText primary="Facilities" />
          </ListItemButton>

          {/* Trainers */}
          <ListItemButton component={Link} href="/manage/trainers" sx={{ pl: 4 }}>
            <ListItemIcon>
              <SportsBasketballIcon />
            </ListItemIcon>
            <ListItemText primary="Trainers" />
          </ListItemButton>

          {/* Memberships */}
          <ListItemButton component={Link} href="/manage/memberships" sx={{ pl: 4 }}>
            <ListItemIcon>
              <MembershipIcon />
            </ListItemIcon>
            <ListItemText primary="Memberships" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
