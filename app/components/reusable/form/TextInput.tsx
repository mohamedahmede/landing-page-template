// app/components/reusable/form/TextInput.tsx
"use client";

import { useField } from "formik";

type TextInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  id?: string; // defaults to name
};

export default function TextInput({
  name,
  label,
  type = "text",
  placeholder,
  className = "",
  id,
}: TextInputProps) {
  const [field, meta] = useField<string>(name);
  const htmlId = id ?? name;
  const showError = meta.touched && !!meta.error;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={htmlId} className="text-sm text-secondary">
          {label}
        </label>
      )}
      <input
        id={htmlId}
        {...field}
        type={type}
        placeholder={placeholder}
        className={`w-full leading-5 rounded-[0.3125rem] bg-second px-7 py-3 text-sm text-secondary outline-none focus:border-white/20 ${showError ? "border-red-400/60" : ""} ${className}`}
      />
      {showError && <p className="!text-xs !text-red-400">{meta.error}</p>}
    </div>
  );
}
