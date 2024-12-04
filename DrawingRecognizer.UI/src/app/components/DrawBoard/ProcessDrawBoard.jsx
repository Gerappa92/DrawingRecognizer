import { useRef } from "react";
import DrawBoard from "./DrawBoard";

export function ProcessDrawBoard({name, onProcessImage}) {
  const drawBoardRef = useRef(null);

  const clearBoard = () => {
    drawBoardRef.current.clearBoard();
  };

  const processImage = () => {
    const imageData = drawBoardRef.current.getImage();
    onProcessImage(imageData);
  };

  return (
    <div style={styles.container}>
      <DrawBoard ref={drawBoardRef} width={800} height={600} />
      <div style={styles.buttonContainer}>
        {" "}
        <button onClick={clearBoard}>Clear Board</button>
        <button onClick={processImage}>{name}</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ProcessDrawBoard;
