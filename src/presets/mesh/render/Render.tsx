import { Shapes } from "./Shape.tsx";
import { type SvgProps } from "../types.ts";


type RenderMeshProps = { mesh: SvgProps;}

export function RenderMesh({ mesh }: RenderMeshProps) {

   const VIEW_BOX: number = 1000
   
   return (
      <svg
         viewBox={`0, 0, ${VIEW_BOX}, ${VIEW_BOX}`}
         preserveAspectRatio="none"
         className="w-full h-full">
         <rect
            x={0} y={0}
            height={VIEW_BOX}
            width={VIEW_BOX}
            fill={`${mesh.background}`}
         />

         {mesh.shapeDat.map((shape, i) => (
            <Shapes key={i} {...shape} />
         ))}
      </svg>
   )
}