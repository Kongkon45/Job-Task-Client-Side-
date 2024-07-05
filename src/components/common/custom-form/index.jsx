"use client";
import React, { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import Input from "../custom-input";

function DynamicForm({ methods, name,title }) {
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const [numProjects, setNumProjects] = useState(1);

  //multipul add form funcation
  const handleAddProjects = () => {
    for (let i = 0; i < numProjects; i++) {
      append({ name: "", role: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 border-2 rounded-[10px] p-4">
      <div className="flex justify-between items-center border-b-[1px] pb-2">
        <h2 className="text-lg font-bold">
          {title}
        </h2>
        <div className="flex justify-end mt-4">
          <input
            type="number"
            value={numProjects}
            onChange={(e) => setNumProjects(Number(e.target.value))}
            className="border py-1 px-3 focus:outline-none w-20"
            min="0"
          />
          <button
            type="button"
            onClick={handleAddProjects}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
          >
            Add Project
          </button>
        </div>
      </div>
      <div className="">
        {fields.map((field, index) => (
          <div key={field.id} className="mb-6 border-b">
            <h3 className="text-green-500 font-bold my-2">
              Project Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-lg font-semibold" htmlFor="projectName">
                  Project Name :
                </label>
                <Input
                  // label="Company Name :"
                  name={`${name}.${index}.name`}
                  placeholder="Enter Project Name"
                  rules={{ required: "Project name is required" }}
                />
              </div>
              <div>
                <label className="text-lg font-semibold" htmlFor="project role">
                  Project Role:
                </label>
                <Input
                  // label="Mobile :"
                  name={`${name}.${index}.role`}
                  placeholder="Enter Project Role"
                  rules={{ required: "Project role is required" }}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicForm;
