"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Card, CardContent,
  Grid,
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
    <Typography variant="h6" gutterBottom>
      Membership
    </Typography>
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Membership Type:</strong> {client.membership}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Account Type:</strong> {client.accountType}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Join Date:</strong> {client.membershipTab?.joinDate || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Renewal Date:</strong> {client.membershipTab?.renewalDate || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Status:</strong> {client.membershipTab?.status || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" mt={1}>
              <strong>Benefits:</strong>
            </Typography>
            {client.membershipTab?.benefits?.length ? (
              <ul style={{ marginLeft: "16px" }}>
                {client.membershipTab.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Typography variant="body2">{benefit}</Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2">No benefits listed.</Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
)}

{tabIndex === 1 && (
  <Box p={2}>
    {/* Details Tab Content */}
    <Typography variant="h6" gutterBottom>
      Details
    </Typography>
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Name:</strong> {client.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Email:</strong> {client.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Phone:</strong> {client.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" mt={1}>
              <strong>Preferences:</strong>
            </Typography>
            {client.detailsTab?.preferences?.length ? (
              <ul style={{ marginLeft: "16px" }}>
                {client.detailsTab.preferences.map((preference, index) => (
                  <li key={index}>
                    <Typography variant="body2">{preference}</Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2">No preferences listed.</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" mt={1}>
              <strong>Emergency Contact:</strong>
            </Typography>
            <Typography variant="body2">
              <strong>Name:</strong> {client.detailsTab?.emergencyContact?.name || "N/A"}
            </Typography>
            <Typography variant="body2">
              <strong>Relation:</strong> {client.detailsTab?.emergencyContact?.relation || "N/A"}
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> {client.detailsTab?.emergencyContact?.phone || "N/A"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
)}

{tabIndex === 2 && (
  <Box p={2}>
    {/* Transactions Tab Content */}
    <Typography variant="h6" gutterBottom>
      Transactions
    </Typography>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2">No transactions available.</Typography>
      </CardContent>
    </Card>
  </Box>
)}

{tabIndex === 3 && (
  <Box p={2}>
    {/* Classes Tab Content */}
    <Typography variant="h6" gutterBottom>
      Classes
    </Typography>
    {client.classes && client.classes.length > 0 ? (
      <Grid container spacing={2}>
        {client.classes.map((classItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="rounded-lg shadow-md">
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {classItem.classTitle}
                </Typography>
                <Typography variant="body2">
                  Date: {classItem.date} | Time: {classItem.time}
                </Typography>
                <Typography variant="body2">
                  Facility: {classItem.facility}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Typography variant="body2">No classes enrolled.</Typography>
    )}
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
