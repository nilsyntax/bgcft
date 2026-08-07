import { Shapes } from "./Shape.tsx";
import { type SvgProps } from "../types.ts";

type RenderMeshProps = { mesh: SvgProps; }

export function RenderMesh({ mesh }: RenderMeshProps) {

   const VIEW_BOX: number = 1000

   return (
      <svg
         viewBox={`0 0 ${VIEW_BOX} ${VIEW_BOX}`}
         preserveAspectRatio="none"
         className="w-full h-full"
         fill="none"
         style={{
            filter: `
               brightness(${mesh.effects.brightness}%)
               contrast(${mesh.effects.contrast}%)
               hue-rotate(${mesh.effects.hue}deg)
               opacity(${mesh.effects.opacity})`,
         }}>
         <defs>
            <filter id="meshBlur">
               <feGaussianBlur stdDeviation={mesh.effects.blur} />
            </filter>
         </defs>

         <rect
            x={0}
            y={0}
            width={VIEW_BOX}
            height={VIEW_BOX}
            fill={mesh.background}
         />

         {/* Only the shapes are blurred */}
         <g filter="url(#meshBlur)">
            {mesh.colorShape.map((shape, i) => (
               <Shapes key={i} {...shape} />
            ))}
         </g>
      </svg>
   )
}