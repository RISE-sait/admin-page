import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  Checkbox,
  FormControlLabel,
  Divider,
  RadioGroup,
  Radio,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { FiltersType } from "../../types/calendar";

interface FilterComponentProps {
  filters: FiltersType;
  onFilterChange: (
    type: keyof FiltersType,
    value: string,
    isChecked: boolean
  ) => void;
  toggleSelectAllFacilities: (checked: boolean) => void;
  resetFilters: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  onFilterChange,
  toggleSelectAllFacilities,
  resetFilters,
}) => {
  const [trainersExpanded, setTrainersExpanded] = useState(false);
  const [classesExpanded, setClassesExpanded] = useState(false);
  const [facilitiesExpanded, setFacilitiesExpanded] = useState(false);
  const [appointmentsExpanded, setAppointmentsExpanded] = useState(false);

  const handleToggle = (
    type: "trainers" | "classes" | "facilities" | "appointments"
  ) => {
    switch (type) {
      case "trainers":
        setTrainersExpanded(!trainersExpanded);
        break;
      case "classes":
        setClassesExpanded(!classesExpanded);
        break;
      case "facilities":
        setFacilitiesExpanded(!facilitiesExpanded);
        break;
      case "appointments":
        setAppointmentsExpanded(!appointmentsExpanded);
        break;
      default:
        break;
    }
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
      {/* Header with Reset Button */}
      <Box mt={2}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Filters{" "}
          <Button variant="text" color="primary" onClick={resetFilters}>
            Reset
          </Button>
        </Typography>

        {/* Trainers Section */}
        <Box mt={2}>
          <Box
            onClick={() => handleToggle("trainers")}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography>Trainers</Typography>
            {trainersExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={trainersExpanded}>
            <Box sx={{ pl: 2 }}>
              {filters.trainers.map((trainer) => (
                <FormControlLabel
                  key={trainer.id}
                  control={
                    <Checkbox
                      checked={trainer.checked}
                      onChange={(e) =>
                        onFilterChange(
                          "trainers",
                          trainer.name,
                          e.target.checked
                        )
                      }
                      color="primary"
                    />
                  }
                  label={trainer.name}
                />
              ))}
            </Box>
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Classes Section */}
        <Box mt={2}>
          <Box
            onClick={() => handleToggle("classes")}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography>Classes</Typography>
            {classesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={classesExpanded}>
            <Box sx={{ pl: 2 }}>
              {filters.classes.map((cls) => (
                <FormControlLabel
                  key={cls.id}
                  control={
                    <Checkbox
                      checked={cls.checked}
                      onChange={(e) =>
                        onFilterChange("classes", cls.name, e.target.checked)
                      }
                      color="primary"
                    />
                  }
                  label={cls.name}
                />
              ))}
            </Box>
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Appointments Section */}
        <Box mt={2}>
          <Box
            onClick={() => handleToggle("appointments")}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography>Appointments</Typography>
            {appointmentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={appointmentsExpanded}>
            <Box sx={{ pl: 2 }}>
              <RadioGroup
                value={filters.appointments}
                onChange={(e) =>
                  onFilterChange("appointments", e.target.value, true)
                }
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
            </Box>
          </Collapse>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Facilities Section */}
        <Box mt={2}>
          <Box
            onClick={() => handleToggle("facilities")}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography>Facilities</Typography>
            {facilitiesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Collapse in={facilitiesExpanded}>
            <Box sx={{ pl: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => toggleSelectAllFacilities(e.target.checked)}
                    color="primary"
                    checked={filters.facilities.every((f) => f.checked)}
                  />
                }
                label="Select All"
              />
              {filters.facilities.map((facility) => (
                <FormControlLabel
                  key={facility.id}
                  control={
                    <Checkbox
                      checked={facility.checked}
                      onChange={(e) =>
                        onFilterChange(
                          "facilities",
                          facility.name,
                          e.target.checked
                        )
                      }
                      color="primary"
                    />
                  }
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>{facility.name}</Typography>
                      {facility.warning && (
                        <Tooltip title="This facility has a warning">
                          <WarningAmberIcon
                            color="error"
                            sx={{ ml: 1, fontSize: 18 }}
                          />
                        </Tooltip>
                      )}
                    </Box>
                  }
                />
              ))}
            </Box>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterComponent;