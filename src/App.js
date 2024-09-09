import { ToastContainer } from "react-toastify";
import FileDropper from "./FileDroper";
import React from "react";
import PropTypes from "prop-types";

/**
 * The ReactDropZone function renders a FileDropper component with specified props and includes a
 * ToastContainer for notifications.
 * @returns The ReactDropZone component is returning a JSX fragment containing a ToastContainer
 * component and a FileDropper component. The ToastContainer component is used for displaying toast
 * notifications at the bottom-right position with an auto-close duration of 3000 milliseconds. The
 * FileDropper component is passed the props id, uploadFile, type, allowMultiple, and style.
 */
function ReactDropZone({ id, uploadFile, types, allowMultiple, style }) {
  return (
    <>
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
ReactDropZone.propTypes = {
  id: PropTypes.string,
  uploadFile: PropTypes.func,
  types: PropTypes.array,
  allowMultiple: PropTypes.bool,
  style: PropTypes.object,
};
export default ReactDropZone;
