export function makeTiles(size, defaultValue = { x: -32, y: -32 }) {
  const { width, height } = size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      row.push({ x, y, id: id++, v: defaultValue });
    }
    tiles.push(row);
  }

  return tiles;
}
