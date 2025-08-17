// app/components/reusable/form/TextArea.tsx
"use client";

import { useField } from "formik";

type TextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  id?: string; // defaults to name
};

export default function TextArea({
  name,
  label,
  placeholder,
  rows = 5,
  className = "",
  id,
}: TextAreaProps) {
  const [field, meta] = useField<string>(name);
  const htmlId = id ?? name;
  const showError = meta.touched && !!meta.error;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={htmlId} className="text-xs text-white/70">
          {label}
        </label>
      )}
      <textarea
        id={htmlId}
        {...field}
        rows={rows}
        style={{ resize: "none" }}
        placeholder={placeholder}
        className={`w-full leading-5 rounded-[0.3125rem] bg-second px-7 py-3 text-sm text-secondary outline-none focus:border-white/20 ${showError ? "border-red-400/60" : ""} ${className}`}
      />
      {showError && <p className="!text-xs !text-red-400">{meta.error}</p>}
    </div>
  );
}
