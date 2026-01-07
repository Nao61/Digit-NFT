import React from "react";

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          px-4 py-3 rounded-lg border outline-none text-sm
          transition
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-black"
          }
        `}
      />


      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
