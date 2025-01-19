import { Card, CardContent, Typography, Grid, Box, Divider } from "@mui/material";
import { MembershipDetails } from "src/types/client";

export default function MembershipTab({
  membershipTab,
}: {
  membershipTab: MembershipDetails;
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
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            textAlign: "left",
            color: "#333",
          }}
        >
          Membership Details
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          {/* Join Date */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#555" }}
              >
                Join Date
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                {membershipTab.joinDate}
              </Typography>
            </Box>
          </Grid>

          {/* Renewal Date */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#555" }}
              >
                Renewal Date
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                {membershipTab.renewalDate}
              </Typography>
            </Box>
          </Grid>

          {/* Status */}
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "#555" }}
              >
                Status
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color:
                    membershipTab.status === "Active"
                      ? "#4caf50" // Green for active
                      : "#f44336", // Red for inactive
                }}
              >
                {membershipTab.status}
              </Typography>
            </Box>
          </Grid>

          {/* Benefits */}
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: 1,
                }}
              >
                Benefits
              </Typography>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {membershipTab.benefits.map((benefit, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    <Typography variant="body2" sx={{ color: "#777" }}>
                      {benefit}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
