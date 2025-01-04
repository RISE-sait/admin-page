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
import { useDrawer } from "src/hooks/drawer";

export default function ClientsPage({ clients }: { clients: Client[] }) {

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const { drawerOpen, drawerContent, openDrawer, closeDrawer } = useDrawer()

  const handleAddClient = (client: Client) => closeDrawer();

  const handleClientSelect = (id: string) => {
    setSelectedClientId(id);
    openDrawer("details");
  }

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
            onClick={() => openDrawer("add")}
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
      <RightDrawer drawerOpen={drawerOpen} handleDrawerClose={closeDrawer}>
        {
          drawerContent === "details" && selectedClientId && <ClientDetail clientId={selectedClientId} onBack={closeDrawer} />
        }
        {
          drawerContent === "add" && <AddClientDialog
            open={drawerOpen}
            onClose={closeDrawer}
            onAddClient={handleAddClient}
          />
        }
      </RightDrawer>

    </div>
  );
}