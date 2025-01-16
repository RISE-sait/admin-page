"use client";

import {
  ManageAccounts,
  ExpandLess,
  ExpandMore,
  People,
  Assessment as AssessmentIcon,
  Payment as PaymentsIcon,
  LocalAtm as LocalAtmIcon,
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

export default function ReportSubMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Report Section */}
      <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Manage Submenu */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Transactions */}
          <ListItemButton component={Link} href="/reports/transactions" sx={{ pl: 4 }}>
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>

          {/* Financials */}
          <ListItemButton component={Link} href="/reports/financials" sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Financials" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
