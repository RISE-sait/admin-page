import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Event } from "src/types/calendar";

export default function AddEventForm({
  onClose,
  onAddEvent,
}: {
  onClose: () => void;
  onAddEvent: (event: Event) => void;
}) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = () => {
    const newEvent: Event = {
      id: String(Date.now()),
      title,
      start: start ? new Date(start) : new Date(),
      end: end ? new Date(end) : new Date(),
    };
    onAddEvent(newEvent);
    onClose();
  };

  return (
    <Box p={2} width="100%">
      <Typography variant="h5" mb={2}>
        Add Event
      </Typography>
      <TextField
        label="Event Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        
        type="datetime-local"
        fullWidth
        margin="normal"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <TextField
        
        type="datetime-local"
        fullWidth
        margin="normal"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Create
      </Button>
    </Box>
  );
}