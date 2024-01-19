import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import classnames from 'classnames';
import Label from './Label.js';

interface TextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  optional?: boolean;
  validation?: RegisterOptions;
  style?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const Textarea = ({
  name,
  label,
  placeholder,
  rows,
  optional,
  validation,
  style,
  disabled,
  defaultValue,
}: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col mb-3">
      <Label name={name} text={label} optional={optional} />
      <textarea
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        rows={rows}
        {...register(name, validation)}
        className={classnames(
          'border border-1.5 resize-none border-inputBorder p-3.5 w-96',
          style
        )}
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
  );
};
