import { Box, Typography } from "@mui/material";

import uploadImageIcon from "../assets/image/upload.png";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import { useRef } from "react";
import acceptFileExtension from "./utils";
import { toast } from "react-toastify";
/**
 * The `TargetWindow` function in JavaScript handles file uploads with drag and drop functionality,
 * checking for allowed file extensions and displaying a drop zone for file upload.
 * @returns The `TargetWindow` component is returning a JSX structure that includes a `Box` component
 * with specific styling properties and event handlers for handling file uploads through drag and drop
 * interactions. Inside the `Box` component, there is an image icon for uploading, an input element for
 * selecting files, and text prompts for users to drag and drop files or browse for files. The
 * component also utilizes the `useDrop
 */
const TargetWindow = ({
  uploadFile,
  allowedExtension,
  allowMultiple,
  style,
}) => {
  let inputRef = useRef();
  /**
   * The function `handleFileUpload` checks for allowed file extensions, filters out invalid files, and
   * uploads the valid files.
   * @param item - The `item` parameter in the `handleFileUpload` function is likely referring to the
   * file input element from which files are being uploaded. It is used to access the files selected by
   * the user for upload.
   */
  function handleFileUpload(item) {
    if (allowedExtension) {
      const allowedFiles = Array.from(item.files).filter((res) =>
        acceptFileExtension(res.type, allowedExtension)
      );
      const invalidFiles = Array.from(item.files).filter(
        (res) => !acceptFileExtension(res.type, allowedExtension)
      );
      // console.log(allowedFiles, invalidFiles, allowMultiple, item);
      if (allowedFiles.length > 0) {
        // console.log(allowMultiple ? item.files : item.files[0]);
        uploadFile(allowMultiple ? item.files : item.files[0]);
      }
      if (invalidFiles.length > 0) {
        toast.error(
          `${invalidFiles
            .map((res) => res.name)
            .join(",")} are invalid file extensions`
        );
      }
      // uploadFile(item.files[0]);
    } else {
      uploadFile(allowMultiple ? item.files : item.files[0]);
    }
  }
  /* The code snippet you provided is using the `useDrop` hook from the `react-dnd` library. This hook
  is used for handling the drop targets in a drag and drop interaction. Here's a breakdown of what
  the `useDrop` hook is doing in this context: */
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      /**
       * The `drop` function calls `handleFileUpload` with the `item` parameter.
       * @param item - The `item` parameter in the `drop` function likely represents a file that is
       * being uploaded. It is passed to the `handleFileUpload` function for processing.
       */
      drop(item) {
        handleFileUpload(item);
      },

      /**
       * The `hover` function logs the `files` and `items` properties of the `item` parameter when
       * called.
       * @param item - The `item` parameter seems to be an object that has `files` and `items`
       * properties. When the `hover` function is called with an `item` object, it can access and
       * potentially manipulate the `files` and `items` properties of that object.
       */
      hover(item) {
        // console.log("hover", item.files, item.items);
      },

      /**
       * The `canDrop` function checks if only one file is allowed to be dropped based on the
       * `allowMultiple` flag.
       * @param item - The `item` parameter seems to be an object that contains a property `files`,
       * which is an array of files. The function `canDrop` checks if the length of the `files` array
       * is greater than 1 and if the `allowMultiple` flag is not set. If both conditions
       * @returns The function `canDrop(item)` will return `true` if the condition `item.files.length >
       * 1 && !allowMultiple` is not met, and will return `false` if the condition is met.
       */
      canDrop(item) {
        if (item.files.length > 1 && !allowMultiple) {
          toast.error("Only one file allowed");
          return false;
        }
        return true;
      },

      /* It is defining a function that is passed as an argument to the `collect` property of the
      `useDrop` hook in the `react-dnd` library. */
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          // console.log("collect", item.files, item.items);
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    []
  );

  /* The line `const isActive = canDrop && isOver;` is creating a boolean variable `isActive` that is
  true if both `canDrop` and `isOver` are true. */
  const isActive = canDrop && isOver;
  return (
    <>
      <Box
        sx={{
          minHeight: "200px",
          border: "2px dashed #DADADA",
          borderRadius: "10px",
          background: "#F6F6F6",
          opacity: isActive ? "0.4" : "",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={style ? style : {}}
        ref={drop}
      >
        <Box textAlign={"center"}>
          <img src={uploadImageIcon} width={60} height={60} alt="img_1" />
          <input
            accept={allowedExtension}
            ref={(input) => (inputRef = input)}
            type="file"
            style={{ display: "none" }}
            multiple={allowMultiple}
            onChangeCapture={(e) => handleFileUpload(e.target)}
          />
          <Typography color={"success"} fontWeight={"bold"}>
            Drag & Drop Here to upload
          </Typography>
          <Typography
            color={"turquoise"}
            onClick={() => inputRef.click()}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            or browse
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TargetWindow;
