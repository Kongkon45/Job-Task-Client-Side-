"use client"
import React, { useState } from 'react';
import { useFieldArray} from 'react-hook-form';
import Input from '../custom-input';

function MultipleDynamicForm({methods}) {
  const { control } = methods;
  const { fields: companyFields, append: appendCompany,remove: removeCompany } = useFieldArray({
    control,
    name: 'companyInfo'
  });


  const [numCompany, setNumCompany] = useState(1);
  const handleAddCompany = () => {
    for (let i = 0; i < numCompany; i++) {
        appendCompany({ name: '', mobile: '', projects: [{ name: '', role: '' }] })
    }
  };
    
  return (
      <div className="max-w-5xl mx-auto mt-10 border-[1px] p-4">
          <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-semibold text-green-500">Employees and Projects Information</h3>
        <div className="flex justify-end mt-4">
          <input
            type="number"
            value={numCompany}
            onChange={(e) => setNumCompany(Number(e.target.value))}
           className="w-20 px-4 py-1 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            min="1"
          />
          <button
            type="button"
            onClick={handleAddCompany}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
          >
            Add Company Info
          </button>
        </div>
      </div>
    {companyFields.map((company, companyIndex) => (
      <div key={company.id} className="mb-6 border-[1px] p-4">
     <div className="flex justify-between items-center mb-4">
                <h2 className="text-md font-semibold text-blue-600">Company Employee Information</h2>
                <button
                  type="button"
                  onClick={() => removeCompany(companyIndex)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove Company
                </button>
              </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company Name"
            name={`companyInfo.${companyIndex}.name`}
                    rules={{ required: 'Company name is required' }}
                    required
                    placeholder='Enter Company Name'
                   className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Input
            label="Mobile"
            name={`companyInfo.${companyIndex}.mobile`}
                    rules={{ required: 'Mobile number is required' }}
                    required
                    placeholder='Enter Mobile Number'
                    className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <ProjectFields control={control} companyIndex={companyIndex} />
      </div>
    ))}
  </div>
  );
}

function ProjectFields({ control, companyIndex }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `companyInfo.${companyIndex}.projects`})

  const [numProjects, setNumProjects] = useState(1);
  const handleAddProjects = () => {
    for (let i = 0; i < numProjects; i++) {
      append({ name: '', role: '' });
    }
  };

  return (
    <div className="mt-4 border-[1px] p-4">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-md font-semibold text-green-500">All Projects Information</h3>
        <div className="flex justify-end mt-4">
          <input
            type="number"
            value={numProjects}
            onChange={(e) => setNumProjects(Number(e.target.value))}
            className="w-20 px-4 py-1 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            min="1"
          />
          <button
            type="button"
            onClick={handleAddProjects}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
          >
            Add Projects
          </button>
        </div>
      </div>
      <div>
        {fields.map((field, index) => (
          <div key={field.id} className="mb-6 border-[1px] p-4">
            <h3 className="text-blue-600 font-bold mb-2">Projects Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Project Name"
                name={`companyInfo.${companyIndex}.projects.${index}.name`}
                        rules={{ required: 'Project name is required' }}
                        required
                        placeholder='Enter project Name'
                      className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Input
                label="Project Role"
                name={`companyInfo.${companyIndex}.projects.${index}.role`}
                        rules={{ required: 'Project role is required' }}
                        required
                        placeholder='Enter Project Role'
                       className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove Projects
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleDynamicForm;