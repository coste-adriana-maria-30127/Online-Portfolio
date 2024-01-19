interface LabelProps {
  text?: string;
  name: string;
  optional?: boolean;
}

const Label = ({ text, name, optional }: LabelProps) => (
  <div className="flex flex-row">
    <label
      htmlFor={name}
      className="font-bold uppercase text-black text-sm my-3.5"
    >
      {text}
    </label>
    {optional && (
      <p className="text-textSecondary text-sm my-3.5 mx-1">(optional)</p>
    )}
  </div>
);

export default Label;
