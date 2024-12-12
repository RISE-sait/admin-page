"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import JSON data
import clientsData from "src/data/clients.json";
import { Client } from "src/types/client";

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
          <Typography variant="body1">{client.email}</Typography>
          <Typography variant="body1">{client.phone}</Typography>
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
        <Tab label="Membership" />
        <Tab label="Details" />
        <Tab label="Transactions" />
        <Tab label="Classes" />
        <Tab label="Notes" />
      </Tabs>

      {/* Tab Panels */}
      {tabIndex === 0 && (
        <Box p={2}>
          {/* Membership Tab Content */}
          <Typography variant="h6">Membership</Typography>
          {/* Display membership details */}
        </Box>
      )}
      {tabIndex === 1 && (
        <Box p={2}>
          {/* Details Tab Content */}
          <Typography variant="h6">Details</Typography>
          {/* Display and edit client details */}
        </Box>
      )}
      {tabIndex === 2 && (
        <Box p={2}>
          {/* Transactions Tab Content */}
          <Typography variant="h6">Transactions</Typography>
          {/* List of transactions */}
        </Box>
      )}
      {tabIndex === 3 && (
        <Box p={2}>
          {/* Classes Tab Content */}
          <Typography variant="h6">Classes</Typography>
          {/* List and enroll in classes */}
        </Box>
      )}
      {tabIndex === 4 && (
        <Box p={2}>
          {/* Notes Tab Content */}
          <Typography variant="h6">Notes</Typography>
          <TextField
            label="Add Note"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Note
          </Button>
        </Box>
      )}
    </Box>
  );
}