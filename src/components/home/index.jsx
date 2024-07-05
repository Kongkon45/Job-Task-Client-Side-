"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicForm from "../common/custom-form";
import MultipulDynamicForm from "../common/multipul-form";
import PersonalInfo from "../common/personal-info";

const Create = () => {
  const methods = useForm({
    defaultValues: {
      companyInfo: [{
        name: '',
        mobile: '',
        projects: [{ name: '', role: '' }]
      }]
    }
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <PersonalInfo />
          </div>
          <div>
            <MultipulDynamicForm methods={methods} />
          </div>
          <div className="flex justify-center my-6">
            <button
              className="bg-green-500 py-2 px-4 rounded-[10px] text-white text-lg font-medium"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Create;
