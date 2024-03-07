import "./DragAndDrop.css";
import { FaFileDownload } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const DragAndDrop = () => {
  const handleFileUpload = (text) => {
    console.log("Texto do arquivo:", text);
  };
  const FileUploader = ({ onFileUploaded, children }) => {
    const onDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result;
          onFileUploaded(text);
        };
        reader.readAsText(file);
      },
      [onFileUploaded]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </div>
    );
  };

  return (
    <div className="drag-and-drop-container">
      <FileUploader onFileUploaded={handleFileUpload}>
        <div className="drag-and-drop-content">
          <FaFileDownload className="drag-and-drop-icon" />
        </div>
      </FileUploader>
    </div>
  );
};

export default DragAndDrop;