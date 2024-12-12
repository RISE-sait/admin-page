"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Client } from "src/types/client";

// Import Client interface

export default function AddClientDialog({
  open,
  onClose,
  onAddClient,
}: {
  open: boolean;
  onClose: () => void;
  onAddClient: (client: Client) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [membership, setMembership] = useState("");
  const [accountType, setAccountType] = useState("");
  // Handle profilePicture as needed (e.g., file upload)

  const handleAdd = () => {
    const newClient: Client = {
      id: String(Date.now()),
      name,
      email,
      phone,
      
      membership,
      accountType,
      profilePicture: "", // Implement file upload if necessary
    };
    onAddClient(newClient);
    // Reset fields
    setName("");
    setEmail("");
    setPhone("");
    setMembership("");
    setAccountType("");
    onClose();
  };

  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={onClose}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={2}>
          Add New Client
        </Typography>
      </Box>
      <DialogContent>
        {/* Name Field */}
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Email Field */}
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Phone Field */}
        <TextField
          margin="dense"
          label="Phone"
          type="tel"
          fullWidth
          variant="standard"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* Membership Field */}
        <TextField
          margin="dense"
          label="Membership"
          type="text"
          fullWidth
          variant="standard"
          value={membership}
          onChange={(e) => setMembership(e.target.value)}
        />
        {/* Account Type Field */}
        <TextField
          margin="dense"
          label="Account Type"
          type="text"
          fullWidth
          variant="standard"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        />
        {/* Additional Fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Box>
  );
}