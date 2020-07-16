import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Handle({
  tilesets,
  tileset,
  setTileset,
  setTiles,
  tiles,
  setMapSize,
  mapSize,
  activeTile,
  setDefaultTile,
  defaultTile,
}) {
  const tilesetOptions = Object.keys(tilesets).flatMap((set) =>
    tilesets[set].variants.map((variant) => (
      <option value={`${set}/${variant}`}>
        {set} - {variant}
      </option>
    ))
  );

  function fillLayer0() {
    if (defaultTile.x < 0) return;

    const _tiles = [];
    for (let y = 0; y < tiles.length; y++) {
      const _row = [];
      for (let x = 0; x < tiles[y].length; x++) {
        _row.push({
          ...tiles[y][x],
          v: defaultTile,
        });
      }
      _tiles.push(_row);
    }
    setTiles(_tiles);
  }

  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "0.25rem",
        display: "flex",
      }}
    >
      <div id="handle" style={{ width: 32, height: 32 }}>
        <img src="/img/drag-handle.png" alt="" />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        <div style={{ padding: "0.25rem" }}>
          <input
            type="text"
            value={mapSize.width}
            size={4}
            onChange={(e) => {
              const width = Number(e.target.value);
              setMapSize((prev) => ({
                ...prev,
                width,
              }));
            }}
          />
          w
        </div>

        <div style={{ padding: "0.25rem" }}>
          <input
            type="text"
            value={mapSize.height}
            size={4}
            onChange={(e) => {
              const height = Number(e.target.value);
              setMapSize((prev) => ({
                ...prev,
                height,
              }));
            }}
          />
          h
        </div>

        <div style={{ padding: "0.25rem" }}>
          <Dropdown
            onChange={setTileset}
            value={tileset}
            options={tilesetOptions}
          />
        </div>

        <div style={{ padding: "0.25rem", display: "flex" }}>
          <div
            style={{
              margin: "1px 2px 0 0",
              height: 32,
              width: 32,
              ...(defaultTile.x > -1 && defaultTile.y > -1
                ? {
                    background: `url(/sprites/${tileset}.png) -${
                      defaultTile.x * 32
                    }px -${defaultTile.y * 32}px no-repeat`,
                  }
                : {}),
              border: "1px solid black",
            }}
            onClick={() => setDefaultTile(activeTile)}
          />
          <button onClick={() => fillLayer0()}>Fill Layer 0</button>
        </div>
      </div>
    </div>
  );
}
