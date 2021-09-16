import React, { Component, useState } from "react";
import "@material-tailwind/react/tailwind.css";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import DropAcc from "../components/DropAcc";
import DropComp from "../components/DropComp";
import Select from "react-dropdown-select";
const data = [
  { id: "022867b7-47c6-47d9-98c6-47580b8dfb7b", name: "Melody Schamberger" },
];

function HomePage() {
  const [values, setValues] = useState([]);
  console.log(values);
  return (
    <div class="h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue">
      <div class="w-screen h-100%  ">
        <div class="flex justify-between items-center">
          <p class="font-bold text-4xl mt-8 text-white mb-5 font-roboto">
            Şirket Bilgileri
          </p>
          <div class="mt-8">
            <DropAcc />
          </div>
        </div>
        <div class="flex  h-3/4   shadow-2xl  rounded-3xl overflow-hidden bg-white mt-5 flex-column justify-center ">
          <div>
            <div class="flex flex-row mt-16 items-center ">
              <p class="text-line-gray font-medium text-lg"> Şirket Adı*</p>
              <input
                type="text"
                class={`outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-10`}
              />
            </div>
            <div class=" mt-5  ">
              <Select
                values={values}
                options={data}
                onChange={(values) => setValues(values)}
                placeholder="Seç.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
