import { useState, useRef, useEffect } from "react";

const useCanvasDrawing = (canvasRef, lineWidth = 5) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const getX = (event) =>
    event.clientX - canvasRef.current.getBoundingClientRect().left;
  const getY = (event) =>
    event.clientY - canvasRef.current.getBoundingClientRect().top;

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(getX(event), getY(event));
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineTo(getX(event), getY(event));
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#FFFFFF";
  }, [canvasRef]);

  return { startDrawing, draw, stopDrawing, isDrawing };
};

export default useCanvasDrawing;