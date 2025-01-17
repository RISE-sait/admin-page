import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel, Button, Divider, Collapse, IconButton, Radio, RadioGroup } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
import "react-calendar/dist/Calendar.css";

const FilterComponent = () => {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Test Trainer", checked: true },
    { id: 2, name: "Trainer 2", checked: false },
    { id: 3, name: "Trainer 3", checked: false },
  ]);
  const [classes, setClasses] = useState([
    { id: 1, name: "Ball Handling", checked: true },
    { id: 2, name: "IQ/Footwork/Spacing", checked: true },
    { id: 3, name: "IQ/Situational Drills", checked: true },
    { id: 4, name: "OPEN GYM/DROP IN", checked: true },
    { id: 5, name: "RISE PERFORMANCE", checked: true },
    { id: 6, name: "Shooting Class", checked: true },
  ]);

  const [appointments, setAppointments] = useState("booked");
  const [facilities, setFacilities] = useState([
    { id: 1, name: "Check out Tryout location", checked: true },
    { id: 2, name: "Online Facility", checked: false, warning: true },
    { id: 3, name: "Prolific Sports House", checked: true },
    { id: 4, name: "Rise Facility - Calgary", checked: false, warning: true },
    { id: 5, name: "The Genesis Centre", checked: false },
  ]);
  const [trainersExpanded, setTrainersExpanded] = useState(true);
  const [classesExpanded, setClassesExpanded] = useState(true);
  const [facilitiesExpanded, setFacilitiesExpanded] = useState(true);
  const [appointmentsExpanded, setAppointmentsExpanded] = useState(true);

  const handleClassToggle = (id: number) => {
    setClasses((prev) =>
      prev.map((cls) =>
        cls.id === id ? { ...cls, checked: !cls.checked } : cls
      )
    );
  };

  const handleTrainerToggle = (id: number) => {
    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === id ? { ...trainer, checked: !trainer.checked } : trainer
      )
    );
  };

  const handleFacilityToggle = (id: number) => {
    setFacilities((prev) =>
      prev.map((facility) =>
        facility.id === id
          ? { ...facility, checked: !facility.checked }
          : facility
      )
    );
  };

  const toggleSelectAllFacilities = (checked: boolean) => {
    setFacilities((prev) =>
      prev.map((facility) => ({ ...facility, checked }))
    );
  };

  const resetFilters = () => {
    setTrainers((prev) => prev.map((t) => ({ ...t, checked: true })));
    setClasses((prev) => prev.map((cls) => ({ ...cls, checked: true })));
    setAppointments("booked");
    setFacilities((prev) => prev.map((f) => ({ ...f, checked: true })));
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Filters */}
      <Box mt={2}>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          Filters{" "}
          <Button variant="text" color="primary" onClick={resetFilters}>
            Reset
          </Button>
        </Typography>

        {/* Trainers Section */}
        <Box mt={2}>
          <Box
            onClick={() => setTrainersExpanded(!trainersExpanded)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="subtitle1">Trainers</Typography>
            {trainersExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={trainersExpanded}>
            {trainers.map((trainer) => (
              <FormControlLabel
                key={trainer.id}
                control={
                  <Checkbox
                    checked={trainer.checked}
                    onChange={() => handleTrainerToggle(trainer.id)}
                    color="primary"
                  />
                }
                label={trainer.name}
              />
            ))}
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Classes Section */}
        <Box>
          <Box
            onClick={() => setClassesExpanded(!classesExpanded)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="subtitle1">Classes</Typography>
            {classesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={classesExpanded}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) =>
                    setClasses((prev) =>
                      prev.map((cls) => ({
                        ...cls,
                        checked: e.target.checked,
                      }))
                    )
                  }
                  color="primary"
                  checked={classes.every((cls) => cls.checked)}
                />
              }
              label="Select all"
            />
            {classes.map((cls) => (
              <FormControlLabel
                key={cls.id}
                control={
                  <Checkbox
                    checked={cls.checked}
                    onChange={() => handleClassToggle(cls.id)}
                    color="primary"
                  />
                }
                label={cls.name}
              />
            ))}
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Appointments Section */}
        <Box>
          <Box
            onClick={() => setAppointmentsExpanded(!appointmentsExpanded)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Appointments</Typography>
            {appointmentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={appointmentsExpanded}>
            <RadioGroup
              value={appointments}
              onChange={(e) => setAppointments(e.target.value)}
              sx={{ mt: 1 }}
            >
              <FormControlLabel
                value="booked"
                control={<Radio color="primary" />}
                label="Show booked"
              />
              <FormControlLabel
                value="availability"
                control={<Radio color="primary" />}
                label="Show availability"
              />
              <FormControlLabel
                value="both"
                control={<Radio color="primary" />}
                label="Show both"
              />
            </RadioGroup>
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Facilities Section */}
        <Box>
          <Box
            onClick={() => setFacilitiesExpanded(!facilitiesExpanded)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Facilities</Typography>
            {facilitiesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={facilitiesExpanded}>
            <RadioGroup
              sx={{ mt: 1 }}
              defaultValue="booked"
            >
              <FormControlLabel
                value="booked"
                control={<Radio color="primary" />}
                label="Show booked"
              />
              <FormControlLabel
                value="non-booked"
                control={<Radio color="primary" />}
                label="Show non-booked"
              />
              <FormControlLabel
                value="both"
                control={<Radio color="primary" />}
                label="Show both"
              />
            </RadioGroup>
            <Divider sx={{ my: 1 }} />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => toggleSelectAllFacilities(e.target.checked)}
                  color="primary"
                  checked={facilities.every((f) => f.checked)}
                />
              }
              label="Select all"
            />
            {facilities.map((facility) => (
              <FormControlLabel
                key={facility.id}
                control={
                  <Checkbox
                    checked={facility.checked}
                    onChange={() => handleFacilityToggle(facility.id)}
                    color="primary"
                  />
                }
                label={
                  <Box display="flex" alignItems="center">
                    {facility.name}
                    {facility.warning && (
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{ ml: 1 }}
                      >
                        ⚠
                      </Typography>
                    )}
                  </Box>
                }
              />
            ))}
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Settings Section */}
        <Box>
          <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
            <IconButton size="small" color="primary">
              <SettingsIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>
              Settings
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterComponent;