"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import JSON data
import clientsData from "src/data/clients.json";
import { Client } from "src/types/client";

// Tab Components
import MembershipTab from "./details/Membership";
import DetailsTab from "./details/Details";
import ClassesTab from "./details/Classes";
import Notes from "./details/Notes";
import TransactionsTab from "./details/Transactions";

export default function ClientDetail({
  clientId,
  onBack,
}: {
  clientId: string;
  onBack: () => void;
}) {
  const [client, setClient] = useState<Client | null>(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // Fetch client data based on clientId
    const clientData = clientsData.find((c) => c.id === clientId);
    setClient(clientData || null);
  }, [clientId]);

  if (!client) {
    return <div>Loading...</div>;
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box p={2}>
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={2}>
          Client Details
        </Typography>
      </Box>

      {/* Client main details */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={client.profilePicture}
          alt={client.name}
          sx={{ width: 64, height: 64, mr: 2 }}
        />
        <Box>
          <Typography variant="h5">{client.name}</Typography>
          <Typography variant="body1">Email: {client.email}</Typography>
          <Typography variant="body1">Phone: {client.phone}</Typography>
          <Typography variant="body1">
            Membership: {client.membership}
          </Typography>
          <Typography variant="body1">
            Account Type: {client.accountType}
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Membership"/>
        <Tab label="Details" />
        <Tab label="Classes" />
        <Tab label="Transactions" />
        <Tab label="Notes" />
      </Tabs>

      {/* Tab Panels */}
      <Box p={2}>
        {tabIndex === 0 && client.membershipTab && (
          <MembershipTab membershipTab={client.membershipTab} />
        )}
        {tabIndex === 1 && client.detailsTab && (
          <DetailsTab detailsTab={client.detailsTab} />
        )}
        {tabIndex === 2 && client.classes && (
          <ClassesTab classes={client.classes} />
        )}
        {tabIndex === 3 && <TransactionsTab />}
        {tabIndex === 4 && <Notes />}
        
      </Box>
    </Box>
  );
}
