import { Shapes } from "./Shape.tsx";
import { type ShapeProps } from "../coreO/meshConfig.ts";
// import { meshColors } from "../core/meshConfig.ts";
// import { pickOnce } from "../../../utils/pickOnce.ts";


type RenderMeshProps = {
   mesh: ShapeProps[];
}

export function RenderMesh({ mesh }: RenderMeshProps) {

   // const color = pickOnce(meshColors, 1)
   const VIEW_BOX: number = 1000
   return (
      <svg viewBox={`0, 0, ${VIEW_BOX}, ${VIEW_BOX}`} preserveAspectRatio="none" className="border-5 w-full h-full">
         <rect
            x={0}
            y={0}
            height={VIEW_BOX}
            width={VIEW_BOX}
            fill={`${"rgba(76, 82, 102, 1)"}`}
         />

         {mesh.map((shape, i) => (
            <Shapes key={i} {...shape} />
         ))}
      </svg>
   )
}

// Preset Selection Component
// The editing and control Tools
// Generated BG style Preview
// <svg width="244" height="83" viewBox="0 0 244 83" fill="none" xmlns="http://www.w3.org/2000/svg">
{/* <path d="M148.312 1H2.03845L64.727 82H241.038L148.312 1Z" stroke="black" stroke-width="2"/> */ }
// </svg>
