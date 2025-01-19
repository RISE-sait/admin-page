import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { ClassItem } from "src/types/client";

export default function ClassesTab({ classes }: { classes: ClassItem[] }) {
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
        Classes
      </Typography>
      <Grid container spacing={2}>
        {classes.map((classItem, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    color: "#1976d2",
                  }}
                >
                  {classItem.classTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: 0.5,
                    color: "#555",
                  }}
                >
                  <strong>Date:</strong> {classItem.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: 0.5,
                    color: "#555",
                  }}
                >
                  <strong>Time:</strong> {classItem.time}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                  }}
                >
                  <strong>Facility:</strong> {classItem.facility}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
