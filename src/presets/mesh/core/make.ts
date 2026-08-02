import { random } from "../../../utils/random.ts";
import { pickItem, pickItems } from "../../../utils/pickItems.ts";

import { paths } from "./config/paths.ts";
import { bgColor, colorPalette } from "./config/colors.ts";
import { layouts } from "./config/layout.ts";


export function make() {
   const count = random(2, 3)
   console.log(count)
   const svgPaths = pickItems(paths, count)
   const layoutDat = pickItem(layouts[count])

   const theme = pickItem(colorPalette)
   const colors = pickItems(theme.colors, count)
   const bgColorId = pickItem(theme.bgColor)

   // return bgColorId
   return {
      bgColorId,

      shapeDat: svgPaths.map((path, i) => ({
         path,
         color: colors[i],
         position: layoutDat[i],
         scale: 4,
         blur: 30
      }))
   }
}

console.dir(make(), {depth: null})