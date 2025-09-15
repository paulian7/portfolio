import { useState, useRef, useEffect } from "react";
import { FaPaintBrush } from "react-icons/fa";

// == BEHIND THE IMPORTS ==
// useState - helps us track when the "draw" feature is activiated
// useRef - helps us hold a reference to <canvas> element so we can call draw func on it
// useEffect - resizes our canvas to corr size whenever "draw" btn clicked

export const Draw = () => {
  // == TRACKS THE COMPONENT STATES ==

  // drawingActive - true when user clicks btn to start drawing
  const [drawingActive, setDrawingActive] = useState(false);

  // canvasRef - stores ref to canvas element so we can draw on it
  const canvasRef = useRef(null);

  // isDrawing - tracks when mouse / touch is actively drawing on canvas
  const [isDrawing, setIsDrawing] = useState(false);

  // when drawingActive changes --> canvas is resized to match curr window size
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current; // our curr paper we're drawing on
    canvas.width = window.innerWidth; // grabs curr window width
    canvas.height = window.innerHeight; // grabs curr window height
  }, [drawingActive]);

  // logic for drawing w/ a mouse -- sets it up
  const startDrawing = (e) => {
    if (!drawingActive) return;
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "#0A7FBF";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath(); // starts new path (aka new set of drawing)
    ctx.moveTo(e.clientX, e.clientY);
  };

  // drawing logic for when mouse is movin' around
  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.clientX, e.clientY); // draws to where mouse pos is next
    ctx.stroke(); // makes drawing show up
  };

  // when drawing is finished
  const stopDrawing = () => setIsDrawing(false);

  // DEALS W/ MOBILE ====
  const handleTouchStart = (e) => {
    e.preventDefault();
    startDrawing(e.touches[0]); // gets first pos of wherever finger first touched
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // ensures no scrolling happens when drawing
    draw(e.touches[0]);
  };

  return (
    <>
      <div className="hidden md:block">
        {/* ensures button is btm right corner */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* onClick -- drawing function is set to active, otherwise inactive or when clicked again */}
          <button
            onClick={() => setDrawingActive((prev) => !prev)}
            className={`
                flex items-center justify-center shadow-lg
                h-14 rounded-full
                transition-[width,border-radius,transform] duration-500 ease-in-out
                bg-[#0A7FBF] hover:bg-gray-500 text-white
                ${drawingActive ? "w-60 rounded-lg px-4" : "w-14"}
                transform hover:scale-110 active:scale-95
                animate-wiggle animate-pulse-slow
                `}
          >
            <FaPaintBrush size={24} className="flex-shrink-0" />
            {drawingActive && (
              <span className="ml-3 text-sm transition-opacity duration-500 ease-in-out">
                Click to erase completely
              </span>
            )}
          </button>
        </div>

        {drawingActive && (
          <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-40 cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDrawing}
          />
        )}
      </div>
    </>
  );
};
