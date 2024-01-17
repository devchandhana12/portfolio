import React, { useState } from "react";
import "./App.css";

function App() {
  const [pos, setPos] = useState({
    posX: 0,
    posY: 0,
  });

  return (
    <div
      className="App"
      onMouseMove={(e) =>
        setPos((prev) => ({
          ...prev,
          posX: e.clientX,
          posY: e.clientY,
        }))
      }
    >
      <div>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <h1>hello wo</h1>
        <div className="cursor-dot" style={{ left: pos.posX, top: pos.posY }} />
        <div
          className="cursor-dot-outline"
          style={{
            transition: "transform 0.2s linear",
            transform: `translate(${pos.posX - 20}px, ${pos.posY - 20}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default App;
