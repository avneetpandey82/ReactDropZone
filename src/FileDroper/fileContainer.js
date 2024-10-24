import TargetWindow from "./targetWindow";

/**
 * The `FileContainer` component renders a `TargetWindow` component with specified props for uploading
 * files.
 * @returns A `FileContainer` component is being returned. It contains a `TargetWindow` component with
 * props `uploadFile`, `allowedExtension`, `allowMultiple`, and `style`.
 */
const FileContainer = ({ uploadFile, types, allowMultiple, style }) => {
  return (
    <>
      <TargetWindow
        uploadFile={uploadFile}
        allowedExtension={types}
        allowMultiple={allowMultiple}
        style={style}
      />
    </>
  );
};

export default FileContainer;
