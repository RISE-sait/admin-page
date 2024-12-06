"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import { Client } from "@/app/types/Clients/client";

export default function ClientTable({
  clients,
  onClientSelect,
}: {
  clients: Client[];
  onClientSelect: (id: string) => void;
}) {
  const columns: GridColDef[] = [
    
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phoneNumber", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "membership", headerName: "Membership", flex: 1 }
  ];

  const handleRowClick = (params: any) => {
    onClientSelect(params.id);
  };

  return (
    <div style={{ height: 600 }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSizeOptions={[10]}
        onRowClick={handleRowClick}
      />
    </div>
  );
}