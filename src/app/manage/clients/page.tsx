"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { motion } from "framer-motion";


// Import JSON data
import clientsData from "src/components/clients/clients.json";
import { Client } from "src/types/Clients/client";
import ClientDetail from "./[id]/page";
import AddClientDialog from "src/components/clients/AddClientDialog";
import ClientTable from "src/components/clients/ClientTable";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<"details" | "add" | null>(null);

  useEffect(() => {
    // Load clients data from JSON file
    setClients(clientsData);
  }, []);

  const handleAddClient = (client: Client) => {
    setClients([...clients, client]);
    handleDrawerClose();
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleClientSelect = (id: string) => {
    setSelectedClientId(id);
    setDrawerContent("details");
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedClientId(null);
    setDrawerContent(null);
  };

  const handleAddClientClick = () => {
    setDrawerContent("add");
    setDrawerOpen(true);
  };

  // Filter clients based on the search query
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 flex">
      <motion.div
        style={{ flex: 1, overflowY: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography variant="h4" gutterBottom>
          Clients
        </Typography>
        <div className="flex items-center mb-4">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search clients"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="mr-8"
          />
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddClientClick}
            style={{ marginLeft: "auto" }}
          >
            Add Client
          </Button>
        </div>
        <ClientTable
          clients={filteredClients}
          onClientSelect={handleClientSelect}
        />
      </motion.div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ style: { width: '50%' } }}
      >
        {drawerContent === "details" && selectedClientId && (
          <ClientDetail/>
        )}
        {drawerContent === "add" && (
          <AddClientDialog
            open={drawerOpen}
            onClose={handleDrawerClose}
            onAddClient={handleAddClient}
          />
        )}
      </Drawer>
    </div>
  );
}