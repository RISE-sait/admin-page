"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import { Client } from "src/types/client";

export default function ClientTable({
  clients,
  onClientSelect,
}: {
  clients: Client[];
  onClientSelect: (id: string) => void;
}) {
  const columns: GridColDef[] = [
    {
      field: "profilePicture",
      headerName: "",
      width: 70,
      renderCell: (params) => (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
          <Avatar src={params.value} alt={params.row.name} />
        </div>
      ),
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "membership", headerName: "Membership", flex: 1 },
    { field: "accountType", headerName: "Account Type", flex: 1 },
  ];

  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSizeOptions={[10]}
        onRowClick={(params) => onClientSelect(params.row.id)}
      />
    </div>
  );
}