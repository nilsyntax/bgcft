import { makeMesh } from "../core/makeMesh.ts";
import { Shapes } from "./Shape.tsx";


export function RenderMesh() {

   const shapes = makeMesh()   // initial import

   return (
      <svg width={"100%"} height={"100%"}>
         <rect
         height={"100%"}
         width={"100%"}
         fill={"#14151B"}
         />

         {shapes.map((shape, i) => (
            <Shapes key={i} {...shape}/>
         ))}
      </svg>
   )
}

// Preset Selection Component
// The editing and control Tools
// Generated BG style Preview