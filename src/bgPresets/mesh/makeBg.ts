
import { pickOnce } from "../../utils/pickOnce.ts"
import { random } from "../../utils/random.ts"

import { shapePath } from "./bgConfig.ts"
import { colorPalette } from "./bgConfig.ts"
import { position } from "./bgConfig.ts"

export function generateBg(){
   const count = random(3, 4)

   const shapes = pickOnce(shapePath, count)
   const colors = pickOnce(colorPalette, count)
   const shapePosition = pickOnce(position, count)

   return shapes.map((shape, i) => ({
      // Shape, Position, Color palette, Angle, Scale, blur, opacity
      shape,
      color: colors[i],
      position: shapePosition[i],
      rotation: random(0, 360),
      scale: random(0.8, 1.8),
      blur: random(100, 180),
      opacity: random(0.6, 1)
   }))
}

// console.log(generateBg())

const astyl = generateBg()
console.log(astyl)
console.log(astyl[0].color.colors);
