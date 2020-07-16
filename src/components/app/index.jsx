import React, { useState, useEffect } from "react";
import TilePalete from "../tile-palete";
import Map from "../map";
import useDragDrop from "../../hooks/use-drag-drop";
import { makeTiles } from "../../modules/tiles";

const defaultMapSize = { width: 800, height: 400 };

export default function App() {
  const { position } = useDragDrop("tileset");
  const [tileset, setTileset] = useState("rpg-nature-tileset/spring");
  const [mapSize, setMapSize] = useState(defaultMapSize);
  const [tiles, setTiles] = useState([]);
  const [activeTile, setActiveTile] = useState({ x: -32, y: -32 });
  const [defaultTile, setDefaultTile] = useState({ x: -32, y: -32 });

  useEffect(() => {
    setTiles(makeTiles(mapSize));
  }, [mapSize]);

  function dropTile(pos) {
    const _tiles = [];
    for (let y = 0; y < tiles.length; y++) {
      const _row = [];
      for (let x = 0; x < tiles[y].length; x++) {
        _row.push(
          y === pos.y && x === pos.x
            ? { ...tiles[y][x], v: activeTile }
            : { ...tiles[y][x] }
        );
      }
      _tiles.push(_row);
    }
    setTiles(_tiles);
  }

  return (
    <div
      id="__app"
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "grey",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      <TilePalete
        tileset={tileset}
        mapSize={mapSize}
        setTileset={setTileset}
        position={position}
        setMapSize={setMapSize}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        defaultTile={defaultTile}
        setDefaultTile={setDefaultTile}
        setTiles={setTiles}
        tiles={tiles}
      />

      <Map
        tiles={tiles}
        tileset={tileset}
        dropTile={dropTile}
        activeTile={activeTile}
      />
    </div>
  );
}
