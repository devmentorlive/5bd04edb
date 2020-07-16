import React from "react";
import TileGrid from "../tile-grid";

export default function Map({ tiles, tileset, dropTile }) {
  return (
    <TileGrid
      tiles={tiles}
      tileset={tileset}
      onTileClick={(pos) => {
        dropTile(pos);
      }}
      styles={(pos) => {
        return {
          border: `1px solid black`,
          background: `url(/sprites/${tileset}.png) -${pos.x * 32}px -${
            pos.y * 32
          }px no-repeat`,
        };
      }}
    />
  );
}
