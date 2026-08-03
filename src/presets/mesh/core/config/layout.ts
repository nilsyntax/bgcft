import { type LayoutMap } from "../../types.ts"

export const layouts: LayoutMap = {
  2: [
    // Horizontal
    [
      { x: 30, y: 50 },
      { x: 70, y: 50 },
    ],

    // Vertical
    [
      { x: 50, y: 30 },
      { x: 50, y: 70 },
    ],

    // Diagonal
    [
      { x: 30, y: 30 },
      { x: 70, y: 70 },
    ],

    // Opposite diagonal
    [
      { x: 30, y: 70 },
      { x: 70, y: 30 },
    ],
  ],

  3: [
    // Triangle Up
    [
      { x: 25, y: 70 },
      { x: 75, y: 70 },
      { x: 50, y: 30 },
    ],

    // Triangle Down
    [
      { x: 25, y: 30 },
      { x: 75, y: 30 },
      { x: 50, y: 70 },
    ],

    // Triangle Left
    [
      { x: 30, y: 50 },
      { x: 70, y: 25 },
      { x: 70, y: 75 },
    ],

    // Triangle Right
    [
      { x: 70, y: 50 },
      { x: 30, y: 25 },
      { x: 30, y: 75 },
    ],

    // Wide
    [
      { x: 20, y: 35 },
      { x: 80, y: 35 },
      { x: 50, y: 75 },
    ],

    // Inverted Wide
    [
      { x: 20, y: 65 },
      { x: 80, y: 65 },
      { x: 50, y: 25 },
    ],
  ],
}