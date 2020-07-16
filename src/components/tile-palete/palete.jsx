import React from "react";
import TileGrid from "../tile-grid";
import { makeTiles } from "../../modules/tiles";

export default function Palete({ tileset, size, activeTile, setActiveTile }) {
  const tiles = makeTiles(size);
  return (
    <>
      <TileGrid
        tileset={tileset}
        tiles={tiles.map((row, y) =>
          row.map((tile, x) => ({ x, y, v: { x, y } }))
        )}
        onTileClick={(pos) => setActiveTile(pos)}
        styles={(pos) => {
          return {
            background: `url(/sprites/${tileset}.png) -${pos.x * 32}px -${
              pos.y * 32
            }px no-repeat`,
            border: `1px solid ${
              pos.x === activeTile.x && pos.y === activeTile.y
                ? "white"
                : "black"
            }`,
          };
        }}
      />
    </>
  );
}
