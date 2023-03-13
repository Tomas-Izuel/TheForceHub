import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectFilter = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="text-white">
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
          <MenuItem value={"n/a"}>n/a</MenuItem>
          <MenuItem value={"hermaphrodite"}>Hermaphrodite</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
