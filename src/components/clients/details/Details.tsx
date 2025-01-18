import { Card, CardContent, Typography, Grid, Box, Divider } from "@mui/material";
import { ClientDetails } from "src/types/client";

export default function DetailsTab({
  detailsTab,
}: {
  detailsTab: ClientDetails;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        {/* Header */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            textAlign: "left",
            color: "#333",
          }}
        >
          Client Details
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Grid container spacing={3}>
          {/* Preferences */}
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                marginBottom: 1,
                color: "#555",
              }}
            >
              Preferences
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              {detailsTab.preferences.map((preference, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    backgroundColor: "#e3f2fd",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    color: "#1565c0",
                  }}
                >
                  {preference}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Emergency Contact */}
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                marginBottom: 1,
                color: "#555",
              }}
            >
              Emergency Contact
            </Typography>
            <Box sx={{ paddingLeft: "16px" }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "4px",
                }}
              >
                Name:{" "}
                <span style={{ fontWeight: "400", color: "#555" }}>
                  {detailsTab.emergencyContact.name}
                </span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "4px",
                }}
              >
                Relation:{" "}
                <span style={{ fontWeight: "400", color: "#555" }}>
                  {detailsTab.emergencyContact.relation}
                </span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Phone:{" "}
                <span style={{ fontWeight: "400", color: "#555" }}>
                  {detailsTab.emergencyContact.phone}
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
