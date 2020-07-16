import { useState, useEffect } from "react";

export default function useDragDrop(id) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = document.getElementById("handle");
    handle.addEventListener("mousedown", function (e) {
      document.body.addEventListener("mousemove", move, false);
      document.body.addEventListener(
        "mouseup",
        function () {
          document.body.removeEventListener("mousemove", move, false);
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
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return {
    position,
    move,
  };
}
