// Type Defination
type ShapePath = string


export interface ShapeProps {
  shape: string
  color: string
  position: Position
  scale: number
  blur: number
}
// rotation: number

export interface Position {
  x: number;
  y: number
}
export type Layout = Position[]

export type LayoutMap = {
  [count: number]: Layout[]
}

interface ColorPalette {
  name: string;
  colors: string[];
}

// ########### Configuration ##########

// Shape Path
export const shapePath: ShapePath[] = [
  "M97.7631 1L0 120.098L87.8379 107.535L121.087 200L199 14.5682L112.651 50.2475L97.7631 1Z",
  "M98.5 11L0 0L33.1429 155.208L200 200L178 89.5L98.5 11Z",
  "M0 199L199 147.37L141 111.28L56.5 131.5V44.5L0 0V199Z",
  "M148.32 62.2857L0 0L85.7881 126.857L0 200H101.292L200 168L148.32 62.2857Z",
  "M200 100.292L49.8728 0L0 100.292L23.4097 200L70.7379 100.292L200 177.843V100.292Z",
  "M0 78.3715L73.3668 0H169.849L200 86.0051L188.442 165.394L0 200L93.4673 101.272L0 78.3715Z",
  "M55.0869 0L200 63.7975L0 112.405L137.965 200L55.0869 0Z",
  "M71.3178 200L0 0L200 200H71.3178Z"

]


// Color Pallette
export const colorPalette: ColorPalette[] = [
  { name: "Aurora", colors: ["#5E6BFF", "#FF5AA5", "#4DFFD6", "#C6F7FF"] },
  { name: "Sunset", colors: ["#FF6B6B", "#FFD166", "#F72585", "#7209B7"] },
  { name: "Ocean", colors: ["#2563EB", "#38BDF8", "#22D3EE", "#2DD4BF"] },
  { name: "Forest", colors: ["#166534", "#22C55E", "#86EFAC", "#BBF7D0"] },
  { name: "Candy", colors: ["#FF5AA5", "#FF8FAB", "#FFA94D", "#FFD166"] },
  { name: "Neon", colors: ["#7C3AED", "#EC4899", "#06B6D4", "#22C55E"] },
  { name: "Dream", colors: ["#A78BFA", "#F9A8D4", "#93C5FD", "#A7F3D0"] },
]

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





// ++++++++  Others ++++++++++++
export const bgColorMode = {
  light: "#14151B",
  dark: "#FFFFFF"
}

export const meshColors: string[] = [
  "#5E6BFF", // Indigo Blue
  "#7C5CFF", // Violet
  "#A855F7", // Purple
  "#FF5AA5", // Pink
  "#FF6B6B", // Coral
  "#FF8A5B", // Orange
  "#FFD166", // Yellow
  "#A3E635", // Lime
  "#4ADE80", // Green
  "#00E5A8", // Mint
  "#2DD4BF", // Teal
  "#22D3EE", // Cyan
  "#60A5FA", // Sky Blue
  "#38BDF8", // Light Blue
  "#C4B5FD", // Lavender
  "#F9A8D4", // Soft Pink
  "#FDE68A", // Soft Yellow
  "#86EFAC", // Soft Green
  "#A5F3FC", // Soft Cyan
  "#E9D5FF", // Lilac
]
