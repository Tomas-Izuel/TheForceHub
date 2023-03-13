import { useState } from "react";

const SelectFilter = ({ handleFilterChange, options }) => {
  const [filter, setFilter] = useState("");

  return (
    <select
      name=""
      id=""
      placeholder="select a gender to filter"
      className="text-black p-3 rounded-xl outline-none w-60"
      onChange={(event) => handleFilterChange(event.target.value)}
    >
      {options.map((o) => (
        <option value={o} key={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
