import React, { useState } from "react";
import Handle from "./handle";
import Palete from "./palete";

export default function TilePallet({
  activeLayer,
  setTiles,
  tiles,
  tileset,
  setTileset,
  activeTile,
  setActiveTile,
  defaultTile,
  setDefaultTile,
  setMapSize,
  position,
  mapSize,
}) {
  const tilesets = require("../../data/tilesets.json");

  const [tilesetName, tilesetVariant] = tileset.split("/");
  const size = tilesets[tilesetName];

  return (
    <div
      id="tileset"
      style={{
        position: "absolute",
        border: "1px solid black",
        top: position.y,
        left: position.x,
        zIndex: 100,
      }}
    >
      <Handle
        tilesets={tilesets}
        tileset={tileset}
        mapSize={mapSize}
        setTileset={setTileset}
        setMapSize={setMapSize}
        defaultTile={defaultTile}
        setDefaultTile={setDefaultTile}
        activeTile={activeTile}
        setTiles={setTiles}
        tiles={tiles}
      />

      <Palete
        tileset={tileset}
        size={size}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
      />
    </div>
  );
}
