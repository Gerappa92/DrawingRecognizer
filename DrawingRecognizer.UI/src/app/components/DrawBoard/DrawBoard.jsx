import React, { forwardRef, useRef, useImperativeHandle } from "react";
import useCanvasDrawing from "./useCanvasDrawing";
import styles from "./DrawBoard.module.css"

const DrawBoard = forwardRef(function DrawBoard({ width, height, lineWidth }, ref){
  const canvasRef = useRef(null);
  const { startDrawing, draw, stopDrawing } = useCanvasDrawing(
    canvasRef,
    lineWidth
  );

  useImperativeHandle(ref, () => ({
    clearBoard() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    getImage() {
      const canvas = canvasRef.current;
      return canvas.toDataURL("image/png");
    },
    saveImage() {
      const link = document.createElement("a");
      link.download = "drawboard_image.png";
      link.href = canvasRef.current.toDataURL("image/png");
      link.click();
    },
  }));

  return (
    <canvas
      className={styles.drawBoard}
      ref={canvasRef}
      style={styles.canvas}
      width={width}
      height={height}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    ></canvas>
  );
});

export default DrawBoard;
