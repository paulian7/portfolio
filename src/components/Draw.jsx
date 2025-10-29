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

    // ensures no pixelated drawings
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;

      // Set the internal pixel size to CSS size * device pixel ratio
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);

      // ensure the canvas CSS size still matches the layout
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 3;
    };

    // initializes and keeps size updated while active
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [drawingActive]);

  // logic for drawing w/ a mouse -- sets it up
  const startDrawing = (e) => {
    if (!drawingActive) return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#0A7FBF";

    // begin a fresh path and move to the pointer position adjusted for canvas bounding rect
    ctx.beginPath(); // starts new path (aka new set of drawing)

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.moveTo(x, y);
  };

  // drawing logic for when mouse is movin' around
  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y); // draws to where mouse pos is next
    ctx.stroke(); // makes drawing show up
  };

  // when drawing is finished
  const stopDrawing = () => setIsDrawing(false);

  // DEALS W/ MOBILE ====
  const handleTouchStart = (e) => {
    e.preventDefault();
    // touches[0] has clientX/clientY like mouse events
    startDrawing(e.touches[0]); // gets first pos of wherever finger first touched
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // ensures no scrolling happens when drawing
    draw(e.touches[0]);
  };

  // toggle handler - clears canvas when turning off (matching the button copy)
  const toggleDrawing = () => {
    if (drawingActive && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    setDrawingActive((p) => !p);
  };

  return (
    <>
      {/* ensure draw feature only shows up on desktop */}
      <div className="hidden lg:block">
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleDrawing}
            className={
              `flex items-center justify-center shadow-md h-14 rounded-full transition-all duration-300 ease-out bg-[#0A7FBF] hover:bg-[#086a99] text-white ${
                drawingActive ? "w-60 rounded-lg px-4" : "w-14"
              } transform-gpu will-change-transform hover:scale-105 active:scale-95 animate-wiggle animate-pulse-slow motion-reduce:transition-none motion-reduce:animate-none`
            }
            aria-pressed={drawingActive}
          >
            <FaPaintBrush size={24} className="flex-shrink-0" />
            {drawingActive && (
              <span className="ml-3 text-sm transition-opacity duration-200 ease-out motion-reduce:transition-none">
                Click to erase completely!
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
