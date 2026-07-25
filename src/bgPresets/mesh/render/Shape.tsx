import { type ShapeProps } from "../core/meshConfig"

export function Shapes({
   shape,
   color,
   position,
   rotation,
   scale,
   blur,
}: ShapeProps){
   return (
      <path
      d={shape}
      fill={color}
      transform={`
         translate(${position.x}, ${position.y})
         rotate(${rotation})
         scale(${scale})
         `}
      style={{filter: `blur(${blur}px)`}}
      />
   )
}

// opacity
// opacity={opacity}