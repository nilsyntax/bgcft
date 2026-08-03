import PreviewCanvas from "./previewCanvas"
import { type SvgProps } from "../presets/mesh/types"


type previewAreaProps = {
   mesh: SvgProps;
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