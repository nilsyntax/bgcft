// Type Defination
type ShapePath = string

interface ColorPalette {
   name: string;
   colors: string[];
}

interface Position {
   x: number;
   y: number
}

export interface ShapeProps {
   shape: string
   color: ColorPalette
   position: Position
   rotation: number
   scale: number
   blur: number
   opacity: number
}


// ########### Configuration ##########

// Shape Path
export const shapePath: ShapePath[] = [
   "M1.78381 142.708L126.784 2.70758L121.784 179.708L1.78381 142.708Z",
   "M1.50809 82L89.5081 0L158.508 82L89.5081 156L1.50809 82Z",
   "M2.0124 100.708L77.0288 1.70844L145.012 100.708H2.0124Z",
   "M119 1H1V91H119V1Z",
   "M3.13181 97.9382L138.132 1.93817V97.9382H3.13181Z"
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

export const position: Position[] = [
   { x: 15, y: 20 },
   { x: 80, y: 25 },
   { x: 25, y: 75 },
   { x: 75, y: 80 },
   { x: 50, y: 50 },
]
















// ++++++++  Others ++++++++++++
export const bgColorMode = {
   light: "#14151B",
   dark: "#FFFFFF"
}

export const colors: string[] = [
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
