import { useRef } from "react";
import DrawBoard from "./DrawBoard";
import styles from "./ProcessDrawBoard.module.css"
import Container from "../Layout/Container";

export function ProcessDrawBoard({name, onProcessImage, width=800, height=600, lineWidth=5}) {
  const drawBoardRef = useRef(null);

  const clearBoard = () => {
    drawBoardRef.current.clearBoard();
  };

  const processImage = () => {
    const imageData = drawBoardRef.current.getImage();
    onProcessImage(imageData);
  };

  return (
    <Container>
      <DrawBoard ref={drawBoardRef} width={width} height={height} lineWidth={lineWidth} />
      <div className={styles.buttonContainer}>
        {" "}
        <button onClick={clearBoard}>Clear Board</button>
        <button onClick={processImage}>{name}</button>
      </div>
    </Container>
  );
}

export default ProcessDrawBoard;
