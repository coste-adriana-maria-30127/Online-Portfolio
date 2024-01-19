import { RegisterOptions, useFormContext } from "react-hook-form";
import { ChangeEvent } from "react";
import { ErrorMessage } from "@hookform/error-message";
import classnames from "classnames";
import Label from "./Label.js";

type InputType = "text" | "email" | "password" | "file";

type InputProps = {
  type: InputType;
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
  optional?: boolean;
  style?: string;
  disabled?: boolean;
  defaultValue?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  name,
  label,
  placeholder,
  validation,
  optional,
  style,
  disabled,
  defaultValue,
  handleChange,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={classnames("flex flex-col relative", style)}>
      <Label text={label} name={name} optional={optional} />
      <div className="relative">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
          {...register(name, validation)}
          className={classnames(
            "border border-inputBorder border-1.5 text-black text-sm p-3.5 w-96",
            style,
            {
              ["relative file:bg-inputBorder file:border-0 file:p-0 file:absolute file:right-1 file:top-2 file:px-3.5 file:py-2"]:
                type === "file",
            }
          )}
          onChange={handleChange}
        />
        <div className="relative h-3">
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="absolute font-serif text-sm text-left block text-red-600">
                {message}
              </p>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
