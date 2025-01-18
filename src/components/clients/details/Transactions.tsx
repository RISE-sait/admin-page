// TransactionsTab.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TransactionsTab() {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "#333",
        }}
      >
        Transactions
      </Typography>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "8px",
          border: "1px solid #ddd",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent
          sx={{
            padding: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              textAlign: "center",
            }}
          >
            No transactions available.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
