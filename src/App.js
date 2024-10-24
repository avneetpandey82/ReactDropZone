import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import FileDropper from "./FileDroper";

/**
 * The ReactDropZone function renders a file dropper component with specified props and a toast
 * container for notifications.
 * @returns The `ReactDropZone` function is returning a JSX fragment containing a `ToastContainer`
 * component and a `FileDropper` component. The `ToastContainer` component is used for displaying toast
 * notifications at the bottom-right position with an auto-close duration of 3000 milliseconds. The
 * `FileDropper` component is passed the props `id`, `uploadFile`, `types`, `
 */
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
