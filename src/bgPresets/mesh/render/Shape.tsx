import { type ShapeProps } from "../core/meshConfig"

export function Shapes({
   shape,
   color,
   position,
   rotation,
   scale,
   blur,
   opacity
}: ShapeProps){
   return (
      <path
      d={shape}
      fill={color.colors[0]}
      opacity={opacity}
      transform={`
         translate(${position.x}, ${position.y})
         rotate(${rotation})
         scale(${scale})
         `}
      style={{filter: `blur(${blur}px)`}}
      />
   )
}