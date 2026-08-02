import { type ShapeProps } from "../coreO/meshConfig"

export function Shapes({
   shape, // svg path 
   color,
   position,
   scale,
   blur,
}: ShapeProps) {

   const VIEW_BOX: number = 1000
   const posX = position.x / 100 * VIEW_BOX
   const posY = position.y / 100 * VIEW_BOX

   // const posX = position.x
   // const posY = position.y

   return (
      <path
         d={shape}
         fill={color}
         transform={`
            translate(${posX}, ${posY})
            scale(${scale})
            translate(${-100}, ${-100})
            `}
      style={{ filter: `blur(${blur}px)` }}
      />
   )
}

// rotation,
// rotate(${rotation})
// opacity
// opacity={opacity}