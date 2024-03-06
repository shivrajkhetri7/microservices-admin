import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPEG", "PNG", "GIF"];

const FileUploadAndDrag = () => {
  const [file, setFile] = useState(null);
  const [fileName,setFileName] = useState<string>('');
  const handleChange = (file: any) => {
    setFile(file);
    setFileName(file[0].name);
  };

  return (
    <div>
      <FileUploader
        style={{
          innerWidth:250,
        }}
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${fileName}` : "No files uploaded yet"}</p>
    </div>
  )
}

export default FileUploadAndDrag;