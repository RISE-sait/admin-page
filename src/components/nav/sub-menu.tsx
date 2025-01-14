"use client";

import {
  ManageAccounts,
  ExpandLess,
  ExpandMore,
  People,
  Class as ClassIcon,
  Payments as PaymentsIcon,
  BarChart as BarChartIcon,
  CardMembership as MembershipIcon,
  AddBusiness as AddBusinessIcon,
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

export default function SubMenu() {
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

          {/* Transactions */}
          <ListItemButton component={Link} href="/manage/transactions" sx={{ pl: 4 }}>
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>

          {/* Financials */}
          <ListItemButton component={Link} href="/manage/financials" sx={{ pl: 4 }}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Financials" />
          </ListItemButton>

          {/* Memberships */}
          <ListItemButton component={Link} href="/manage/memberships" sx={{ pl: 4 }}>
            <ListItemIcon>
              <MembershipIcon />
            </ListItemIcon>
            <ListItemText primary="Memberships" />
          </ListItemButton>
          
          {/* Store */}
          <ListItemButton component={Link} href="/manage/store" sx={{ pl: 4 }}>
            <ListItemIcon>
              < AddBusinessIcon/>
            </ListItemIcon>
            <ListItemText primary="Store" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
