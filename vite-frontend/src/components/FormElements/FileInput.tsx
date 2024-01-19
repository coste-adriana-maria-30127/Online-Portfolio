import React, { useState, ChangeEvent } from "react";

interface FileInputProps {
  onFileChange: (dataUrl: string | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setImageDataUrl(dataUrl);
        onFileChange(dataUrl);
      };

      reader.readAsDataURL(file);
    } else {
      setImageDataUrl(null);
      onFileChange(null);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageDataUrl && (
        <img
          src={imageDataUrl}
          alt="Selected"
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
    </div>
  );
};

export default FileInput;
