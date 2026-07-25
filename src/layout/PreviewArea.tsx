import PreviewCanvas from "./previewCanvas"
import { type ShapeProps } from "../bgPresets/mesh/core/meshConfig"

type previewAreaProps = {
   mesh: ShapeProps[];
}

function PreviewArea({mesh}: previewAreaProps) {

   return (
      <>
         <div className=" relative w-full h-full">
            <PreviewCanvas mesh={mesh}/>
         </div>
      </>
   )
}

export default PreviewArea