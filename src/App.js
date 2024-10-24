import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import FileDropper from "./FileDroper";

function ReactDropZone({ id, uploadFile, types, allowMultiple, style }) {
  return (
    <>
      {" "}
      <ToastContainer position="bottom-right" autoClose={3000} />
      <FileDropper
        id={id}
        uploadFile={uploadFile}
        type={types}
        allowMultiple={allowMultiple}
        style={style}
      />
    </>
  );
}

export default ReactDropZone;
