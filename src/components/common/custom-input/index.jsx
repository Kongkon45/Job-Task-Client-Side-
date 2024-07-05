"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  rules = {},
  row = 3,
  textArea = false,
  className = "",
  onChange,
  defaultValue,
  value,
  required = false,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  //error message 
  const getErrorMessage = (name, errors) => {
    const error = errors[name];
    if (!error) return undefined;
    if (Array.isArray(error)) {
      for (const item of error) {
        const message = getErrorMessage(name, item);
        if (message) return message;
      }
    } else if (typeof error === "object") {
      if (error.message) return error.message;
      for (const key in error) {
        const message = getErrorMessage(name, error[key]);
        if (message) return message;
      }
    }

    return undefined;
  };

  const errorMessage = getErrorMessage(name, errors);
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      {(textArea && onChange && (
        <textarea
          id={name}
          rows={row}
          defaultValue={defaultValue}
          className={`${
            errorMessage && "border border-red-200 bg-red-50"
          } ${className} w-full p-2 border rounded-md drop-shadow-sm`}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />
      )) ||
        (textArea && (
          <textarea
            id={name}
            rows={row}
            defaultValue={defaultValue}
            className={`${
              errorMessage && "border border-red-200 bg-red-50"
            } ${className} w-full p-2 border rounded-md drop-shadow-sm`}
            placeholder={placeholder}
            {...register(name, rules)}
            disabled={disabled}
            required
          />
        )) ||
        (onChange && (
          <input
            className={`${className} ${
              errorMessage && "border border-red-200 bg-red-50"
            }  w-full p-2 border border-gray-300 rounded-md  outline-none  `}
            type={type}
            defaultValue={defaultValue}
            value={value}
            id={name}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            required
            {...rules}
          />
        )) ||
        (!textArea && !onChange && (
          <input
            className={`${className} ${
              errorMessage && "border border-red-200 bg-red-50"
            }  w-full p-2 border border-gray-300 rounded-md outline-none drop-shadow-sm `}
            type={type}
            defaultValue={defaultValue}
            value={value}
            id={name}
            placeholder={placeholder}
            {...register(name, rules)}
            disabled={disabled}
            required
          />
        ))}

      {errorMessage && (
        <p className="text-red-600 text-sm">
          {typeof errorMessage === "string"
            ? errorMessage
            : errorMessage.message}
        </p>
      )}
    </div>
  );
};

export default Input;
