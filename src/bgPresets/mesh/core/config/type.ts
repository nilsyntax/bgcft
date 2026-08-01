// defination for svg shape paths
export interface Path {
  d: string
  width: number
  height: number
  center: {
    x: number
    y: number
  }
}

// defination for shape position
export interface Position {
  x: number
  y: number
}

export type Layout = Position[]

export type LayoutMap = {
  [count: number] : Layout[]
}


// defination for color palette
export interface BGColor {
  id: string
  color: string
}

export interface ColorPalette {
  id: string
  colors: string[]
  bgColor: string[]  // background color id
}


















// export type Position = {
//   x: number
//   y: number
// }

// export type Layout = Position[]

// export type LayoutMap = {
//   [count: number]: Layout[]
// }



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



import { pickOnce } from "../../../../utils/pickOnce.ts"

function pickLayout(count: number): Layout[] {
  return pickOnce(layouts[count], 1)
}

const layout = pickLayout(2)

console.log(layout)
// console.log(layout[0])
// console.log(layout[1])
// console.log(layout[2])