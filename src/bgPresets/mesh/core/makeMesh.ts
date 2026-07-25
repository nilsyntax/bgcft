
import { pickOnce } from "../../../utils/pickOnce.ts"
import { random } from "../../../utils/random.ts"

import { shapePath, position, meshColors} from "./meshConfig.ts"  // import the configs 

import { type ShapeProps } from "./meshConfig.ts"


// generate the shapes data
export function makeMesh(): ShapeProps[]{
   const count: number = 3

   const shapes = pickOnce(shapePath, count)
   const colors = pickOnce(meshColors, count)
   const shapePosition = pickOnce(position, count)

   return shapes.map((shape, i) => ({
      // Shape, Position, Color palette, Angle, Scale, blur, opacity
      shape,
      color: colors[i],
      position: shapePosition[i],
      rotation: random(0, 360),
      scale: random(1, 1.4),
      blur: random(90, 100),
   }))
}

console.log(makeMesh())

// opacity: random(0.6, 1)



















// const astyl = generateBg()
// console.log(astyl)
// console.log(astyl[0].color.colors);
