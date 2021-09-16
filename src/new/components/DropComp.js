import { useState } from "react";
import Select from "react-dropdown-select";

const data = [
  { id: "022867b7-47c6-47d9-98c6-47580b8dfb7b", name: "Melody Schamberger" },
];

function DropComp() {
  const [values, setValues] = useState([]);
  console.log(values);
  return (
    <Select
      values={data}
      options={data}
      onChange={(values) => setValues(values)}
      placeholder="Seç.."
    />
  );
}

export default DropComp;
