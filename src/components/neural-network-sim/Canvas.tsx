"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface CanvasRef {
  reset: () => void;
  getImage: () => ImageData | undefined;
}

interface CanvasProps {
  width: number;
  height: number;
  handleRun: () => void;
}

const Canvas = forwardRef((props: CanvasProps, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    // Initialize canvas only once
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "#000000";
    context.lineWidth = 10;
    context.lineCap = "round";

    contextRef.current = context;
  }, []); // Empty dependency array means this runs once

  const startDrawing = (e: MouseEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;
    const rect = canvas.getBoundingClientRect();
    contextRef.current.beginPath();
    contextRef.current.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: MouseEvent) => {
    if (!isDrawing || !canvasRef.current || !contextRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    contextRef.current.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      props.handleRun();
    }
  };

  const reset = () => {
    if (!canvasRef.current || !contextRef.current) return;
    contextRef.current.fillStyle = "#FFFFFF";
    contextRef.current.fillRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );
  };

  const getImage = () => {
    if (!canvasRef.current || !contextRef.current) return null;
    return contextRef.current.getImageData(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );
  };

  useImperativeHandle(ref, () => ({
    reset,
    getImage,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousedown", startDrawing);
    document.addEventListener("mousemove", draw);
    document.addEventListener("mouseup", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      document.removeEventListener("mousemove", draw);
      document.removeEventListener("mouseup", stopDrawing);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      width={props.width}
      height={props.height}
      className="border-2 cursor-crosshair"
    ></canvas>
  );
});
Canvas.displayName = "Canvas";

export default Canvas;
