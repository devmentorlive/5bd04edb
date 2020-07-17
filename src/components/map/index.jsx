import React from "react";

export default function Map({ tiles, tileset, size }) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "white",
        width: size.width,
      }}
    >
      {tiles.map((row, y) => (
        <div style={{ display: "flex" }}>
          {row.map((tile, x) => (
            <div
              style={{
                borderBottom: "1px solid #333",
                borderRight: "1px solid #333",
                background: `url(/sprites/${tileset}.png) -${
                  tile.v.x * 32
                }px -${tile.v.y * 32}px no-repeat`,
                width: 32,
                height: 32,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
