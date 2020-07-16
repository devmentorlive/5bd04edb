import React from "react";

export default function TileGrid({ tiles, styles = () => {}, onTileClick }) {
  return (
    <div
      style={{
        border: "1px solid black",
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      {tiles.flatMap((row, y) => (
        <div style={{ display: "flex" }}>
          {row.map((tile, x) => {
            return (
              <div
                id={`tile_${tile.id}`}
                onClick={() => onTileClick({ x, y })}
                style={{
                  ...styles(tiles[y][x].v),
                  width: 32,
                  height: 32,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
