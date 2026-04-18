import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset 
            ${error ? "ring-red-500" : "ring-gray-300"} 
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            ${error ? "focus:ring-red-500" : "focus:ring-brand-600"} 
            sm:text-sm sm:leading-6 transition-all duration-200
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
        {!error && helperText && <p className="text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
