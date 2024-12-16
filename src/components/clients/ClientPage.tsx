"use client";

import { useState } from "react";
import {
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { motion } from "framer-motion";

import AddClientDialog from "src/components/clients/AddClientDialog";
import { Client } from "src/types/client";
import ClientDetail from "./ClientDetail";
import SearchBar from "../reusable/SearchBar";
import ClientTable from "./ClientTable";
import RightDrawer from "../reusable/RightDrawer";

export default function ClientsPage({ clients }: { clients: Client[] }) {

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<"details" | "add" | null>(null);

  const handleAddClient = (client: Client) => setDrawerOpen(false)

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

  const handleOpenAddClientPanel = () => {
    setDrawerContent("add");
    setDrawerOpen(true);
  };

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

          <SearchBar />
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenAddClientPanel}
            style={{ marginLeft: "auto" }}
          >
            Add Client
          </Button>
        </div>

        <ClientTable
          clients={clients}
          onClientSelect={handleClientSelect}
        />

      </motion.div>
      <RightDrawer drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose}>
        {
          drawerContent === "details" && selectedClientId && <ClientDetail clientId={selectedClientId} onBack={handleDrawerClose} />
        }
        {
          drawerContent === "add" && <AddClientDialog
            open={drawerOpen}
            onClose={handleDrawerClose}
            onAddClient={handleAddClient}
          />
        }
      </RightDrawer>

    </div>
  );
}