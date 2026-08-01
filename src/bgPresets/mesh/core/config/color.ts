import { type BGColor, type ColorPalette } from "./type";


export const backgrounds: BGColor[] = [
   { id: "dark", color: "#0A0A0A" },
   { id: "navy", color: "#0F172A" },
   { id: "purple", color: "#1E1B4B" },
   { id: "midnight", color: "#020617" },
   { id: "slate", color: "#111827" }
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
      bgColor: ["dark", "navy", "purple"],
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

/*
Now let's write the color configuration for color palette

initially I have thought like this

export interface ColorPalette {
  bgColor: string
  colors: string[]
}

export const colorPalette: ColorPalette = [
   bgColor: "#"
   colors: ["#", "#", "#"]
   },
   bgColor: "#"
   colors: ["#", "#", "#"]
   },
   bgColor: "#"
   colors: ["#", "#", "#"]
   },
   bgColor: "#"
   colors: ["#", "#", "#"]
   },
]

But, Im confused should I define seperate each colors: [] array according to the shape count?
for two shape colors: ["#", "#"], theree shape colors: ["#", "#", "#"], four shape colors: ["#", "#", "#", "#"]
or there's something better apporoach could be or in simplicity
*/ 