import { type Backgrounds, type ColorPalette } from "../../types.ts";


export const backgrounds: Backgrounds[] = [
   { id: "dark", color: "#0A0A0A" },
   { id: "navy", color: "#0F172A" },
   { id: "purple", color: "#481b5a" },
   { id: "midnight", color: "#020617" },
   { id: "slate", color: "#111827" },
   { id: "green", color: "#17432f"}
]


export const colorPalette: ColorPalette[] = [
   {
      id: "neon",
      colors: [
         "#00F5FF", // Cyan
         "#FF00D4", // Magenta
         "#39FF14", // Neon Green
         "#7C3AED", // Electric Purple
      ],
      bgColor: ["dark", "navy", "purple", "green"],
   },

   {
      id: "aurora",
      colors: [
         "#00E5A8", // Emerald
         "#00C2FF", // Sky Blue
         "#6D5DFD", // Indigo
         "#A855F7", // Violet
      ],
      bgColor: ["midnight", "navy", "slate"],
   },
]
