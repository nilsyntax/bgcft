import { random } from "../../../utils/random.ts";
import { pickItem, pickItems } from "../../../utils/pickItems.ts";

import { paths } from "./config/paths.ts";
import { backgrounds, colorPalette } from "./config/colors.ts";
import { layouts } from "./config/layout.ts";
import { type SvgProps } from "../types.ts";


export function make(): SvgProps {
   const count = random(2, 3)

   const svgPaths = pickItems(paths, count)
   const layoutDat = pickItem(layouts[count])

   const theme = pickItem(colorPalette)
   const colors = pickItems(theme.colors, count)
   const bgId = pickItem(theme.bgColor)
   const background = backgrounds.find(bg => bg.id === bgId)

   if (!background) {
      throw new Error(`Background "${bgId}" not found`)
   }

   return {
      background: background.color,

      shapeDat: svgPaths.map((path, i) => ({
         path,
         color: colors[i],
         position: layoutDat[i],
         scale: 5,
         blur: 100
      }))
   }
}

console.dir(make(), { depth: null })