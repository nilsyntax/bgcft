import { random } from "../../../utils/random.ts";
import { pickItem, pickItems } from "../../../utils/pickItems.ts";

import { paths } from "./config/paths.ts";
import { colorTheme } from "./config/colors.ts";
import { layouts } from "./config/layout.ts";
import { type SvgProps } from "../types.ts";


export function make(): SvgProps {
   const count = random(1, 2)

   const svgPaths = pickItems(paths, count)
   const layoutDat = pickItem(layouts[count])

   const theme = pickItem(colorTheme)
   const colors = pickItems(theme.colors, theme.colors.length)
   const bgColor = colors[0]
   const shapeColors = colors.slice(1, 1+count)

   return {
      background: bgColor,

      shapeDat: svgPaths.map((path, i) => ({
         path,
         color: shapeColors[i],
         position: layoutDat[i],
         scale: 6,
         blur: 60
      }))
   }
}

console.dir(make(), { depth: null })