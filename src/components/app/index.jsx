import React, { useState, useEffect } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handle = document.getElementById("handle");
    handle.addEventListener("mousedown", function (e) {
      e.preventDefault();
      handle.style.pointerEvents = "none";

      document.body.addEventListener("mousemove", move);
      document.body.addEventListener(
        "mouseup",
        () => {
          document.body.removeEventListener("mousemove", move);
          handle.style.pointerEvents = "initial";
        },
        false
      );

      return () => {
        document.body.removeEventListener("mousedown", move);
        document.body.removeEventListener("mouseup", move);
        document.body.removeEventListener("mousemove", move);
      };
    });
  }, []);

  function move(e) {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    };

    setPosition(pos);
  }

  return (
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "grey",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      <div
        id="palette"
        style={{
          position: "absolute",
          border: "1px solid black",
          top: position.y,
          left: position.x,
          zIndex: 100,
          width: 200,
          height: 200,
          backgroundColor: "white",
        }}
      >
        <img id="handle" src="/img/drag-handle.png" alt="" />
      </div>
    </div>
  );
}
