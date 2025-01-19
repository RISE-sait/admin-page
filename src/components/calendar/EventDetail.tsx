import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from "@mui/material";
import { Event } from "src/types/calendar";

interface Attendee {
  name: string;
  membership: string;
  paid: boolean;
}

export default function EventDetail({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();

  // Sample attendee data
  const bookedAttendees: Attendee[] = [
    { name: "John Doe", membership: "Rise Full Year", paid: true },
    { name: "Jane Smith", membership: "Rise Monthly", paid: true },
  ];
  const cancelledAttendees: Attendee[] = [
    { name: "Max Johnson", membership: "Rise Bootcamp", paid: false },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box display="flex" width="100%" height="100%">
      {/* Left Side (70%) */}
      <Box width="70%" p={2} overflow="auto">
        {/* Tabs Header */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Tab label={`Booked (${bookedAttendees.length})`} />
          <Tab label={`Cancelled (${cancelledAttendees.length})`} />
        </Tabs>

        {/* Tab Panel */}
        <Box mt={2}>
          {tabIndex === 0 && (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Member</strong></TableCell>
                  <TableCell><strong>Membership</strong></TableCell>
                  <TableCell><strong>Paid</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookedAttendees.map((attendee, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{attendee.name}</TableCell>
                    <TableCell>{attendee.membership}</TableCell>
                    <TableCell>{attendee.paid ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <Button variant="text" size="small" color="error">
                        Remove
                      </Button>
                      {/* Add more actions as needed */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {tabIndex === 1 && (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Member</strong></TableCell>
                  <TableCell><strong>Membership</strong></TableCell>
                  <TableCell><strong>Paid</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cancelledAttendees.map((attendee, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{attendee.name}</TableCell>
                    <TableCell>{attendee.membership}</TableCell>
                    <TableCell>{attendee.paid ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <Button variant="text" size="small" color="primary">
                        Rebook
                      </Button>
                      {/* Add more actions as needed */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Box>

      {/* Vertical Divider */}
      <Divider orientation="vertical" flexItem />

      {/* Right Side (30%) */}
      <Box width="30%" p={2} overflow="auto">
        {/* Event Info */}
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.start.toLocaleString()} - {event.end.toLocaleString()}
        </Typography>

        <Box mt={2} mb={2}>
          <Typography variant="body2">
            <strong>Trainer:</strong> Test Trainer
          </Typography>
          <Typography variant="body2">
            <strong>Facility:</strong> Rise Facility - Calgary
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Class Actions */}
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Class Actions
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
          Book Member
        </Button>
        <Button variant="outlined" color="primary" fullWidth sx={{ mb: 1 }}>
          Edit this Event
        </Button>
        <Button variant="outlined" color="error" fullWidth sx={{ mb: 1 }}>
          Delete
        </Button>

        <Divider sx={{ my: 2 }} />

        {/* Member Actions */}
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Member Actions
        </Typography>
        <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
          Check-in Everyone
        </Button>
        <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
          Send Group Message
        </Button>
        <Button variant="outlined" onClick={onClose} fullWidth>
          Close Drawer
        </Button>
      </Box>
    </Box>
  );
}