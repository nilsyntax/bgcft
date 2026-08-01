
import { pickOnce } from "../../../utils/pickOnce.ts"
// import { random } from "../../../utils/random.ts"

import {
   shapePath, layouts, meshColors,
   type Layout, type ShapeProps
} from "./meshConfig.ts"




function pickLayout(shapeCount: number): Layout[] {
   return pickOnce(layouts[shapeCount], 1)
}
// generate the shapes data
export function makeMesh(): ShapeProps[] {
   const count: number = 3
   const layout = pickLayout(count)

   const shapes = pickOnce(shapePath, count)
   const colors = pickOnce(meshColors, count)

   return shapes.map((shape, i) => ({
      shape,      // svg path
      color: colors[i],
      position: layout[0][i],
      scale: 4,
      blur: 30
   }))
}

console.log(makeMesh())



// rotation: random(0, 360),
// opacity: random(0.6, 1)



















// const astyl = generateBg()
// console.log(astyl)
// console.log(astyl[0].color.colors);
