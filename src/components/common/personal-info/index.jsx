"use client";
import React from "react";
import Input from "../custom-input";

const PersonalInfo = () => {
  return (
    <div className="max-w-5xl mx-auto border-2 rounded-[10px] mt-10">
      <h3 className="text-lg font-semibold py-4 border-b-2 pl-4">Personal Information</h3>
        
        <div className="flex justify-between gap-5 py-6 px-4">
          <div className="w-1/2">
            {/* <label className="text-lg font-semibold" htmlFor="firstName">First Name :</label> <br /> */}
             <Input
            label="First Name"
            name={`firstName`}
                    rules={{ required: 'Company name is required' }}
                    required
                    placeholder="Enter First Name"
                   className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          </div>
          <div className="w-1/2">
            {/* <label className="text-lg font-semibold" htmlFor="email">Email :</label> <br /> */}
            <Input
            label="Email"
            type="email"
            name={`email`}
                    rules={{ required: 'email is required' }}
                    required
                    placeholder="Enter Email"
                   className="mt-[4px] px-4 py-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          </div>
        </div>
    </div>
  );
};

export default PersonalInfo;
