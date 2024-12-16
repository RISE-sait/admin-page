"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface Client {
  id: string;
  name: string;
  email: string;
}

export default function ClientDetail() {
  const [client, setClient] = useState<Client | null>(null);

  const params = useParams();
  const id = params.id as string;

  const dummyClients: Client[] = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
  ];

  useEffect(() => {
    const clientData = dummyClients.find((client) => client.id === id);
    setClient(clientData || null);
  }, [id]);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom>
        Client Details
      </Typography>
      <Typography variant="h6">Name: {client.name}</Typography>
      <Typography variant="h6">Email: {client.email}</Typography>
    </div>
  );
}