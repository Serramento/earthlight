"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  type?: "text" | "email" | "textarea";
  placeholder: string;
  register: any;
  error?: string;
}

export function FormField({ type = "text", placeholder, register, error }: FormFieldProps) {
  const Component = type === "textarea" ? Textarea : Input;
  const props = type === "textarea" ? { className: "min-h-[150px]" } : { type };

  return (
    <div>
      <Component
        placeholder={placeholder}
        className="w-full"
        {...register}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}