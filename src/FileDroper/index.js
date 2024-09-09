import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FileContainer from "./fileContainer";
import { useEffect, useState } from "react";

/**
 * The `FileDropper` component is a React component that allows users to drag and drop files for
 * uploading with specified types and styling.
 * @returns The `FileDropper` component is being returned. It consists of a `DndProvider` component
 * with a `FileContainer` component nested inside it. The `FileContainer` component receives props such
 * as `uploadFile`, `types`, `allowMultiple`, and `style`. The `DndProvider` uses HTML5Backend as the
 * backend for drag and drop functionality.
 */
const FileDropper = ({ id, uploadFile, types, allowMultiple, style }) => {
  /* The line `const [context, setContext] = useState(null);` in the `FileDropper` component is using
  the `useState` hook from React to declare a state variable named `context` and a function to
  update that state variable named `setContext`. */
  const [context, setContext] = useState(null);

  /* The `() => { setContext(document.getElementById(id)); }` is an arrow function being used as the
  callback function inside the `useEffect` hook in the `FileDropper` component. */
  useEffect(() => {
    setContext(document.getElementById(id));
  }, [id]);

  return (
    <>
      <DndProvider backend={HTML5Backend} key={id}>
        <FileContainer
          uploadFile={uploadFile}
          types={types}
          allowMultiple={allowMultiple}
          style={style}
        />
      </DndProvider>
    </>
  );
};

export default FileDropper;
