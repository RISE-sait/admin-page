// Notes.tsx
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Notes() {
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
        Notes
      </Typography>
      <TextField
        label="Add Note"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Save Note
      </Button>
    </Box>
  );
}
