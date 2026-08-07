import { pickItem, pickItems } from "../../../utils/pickItems.ts";
import { type SvgProps } from "../types.ts";

import { paths } from "./config/paths.ts";
import { colorTheme } from "./config/colors.ts";
import { layouts } from "./config/layout.ts";
import { defaultMeshSettings } from "./default.ts";
import { random } from "../../../utils/random.ts";


export function make(): SvgProps {

   const count = random(1, 2)
   const { scale, blur, brightness, contrast, hue, opacity, grain } = defaultMeshSettings

   const svgPaths = pickItems(paths, count)
   const layoutDat = pickItem(layouts[count])

   const theme = pickItem(colorTheme)
   const colors = pickItems(theme.colors, theme.colors.length)
   const bgColor = colors[0]
   const shapeColors = colors.slice(1, 1 + count)

   return {
      background: bgColor,

      colorShape: svgPaths.map((path, i) => ({
         path,
         color: shapeColors[i],
         position: layoutDat[i],
         scale,
      })),
      
      effects: {
         blur,
         brightness,
         contrast,
         hue,
         opacity,
         grain,
      }
   }
}

console.dir(make(), { depth: null })