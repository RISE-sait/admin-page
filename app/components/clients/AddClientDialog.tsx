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

// Import Client interface
import { Client } from "@/app/types/Clients/client";
import { revalidatePath } from "next/cache";
import revalidateClients from "@/app/actions";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [membership, setMembership] = useState("");
  // Handle profilePicture as needed (e.g., file upload)

  const handleAdd = async () => {

    try {
      const newClient = {
        id: String(Date.now()),
        name,
        email,
        phoneNumber,
        membership,
        password: 'ahddw'
      };

      const response = await fetch('http://localhost:5000/api/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClient)
      })

      console.log(await response.json())

      onClose()

      window.location.reload()
    }
    catch (e) {
      console.log(e)
    }
  }

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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
        {/* <TextField
          margin="dense"
          label="Account Type"
          type="text"
          fullWidth
          variant="standard"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        /> */}
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