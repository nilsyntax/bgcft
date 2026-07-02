import { useState } from "react"

function PreviewCanvas() {

   const [size, setSize] = useState({width: 800, height: 400})
   const [width, setWidth] = useState(size.width)
   const [height, setHeight] = useState(size.height)


   const applySize = (dimension: "width" | "height", value:number) => {
      setSize((prev) => ({
         ...prev,
         [dimension]: Number(value)
      }))
   }
   return (
      <>
         <div id="previewCanvas" className="w-fit h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div id="previewTool" className="h-8 w-full">

               <input type="number" defaultValue={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  onKeyDown={(e) => {
                     if (e.key === "Enter") {
                        applySize("width", width)
                     }
                  }}
               />
               <input type="number" defaultValue={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  onKeyDown={(e) => {
                     if (e.key === "Enter") {
                        applySize("height", height)
                     }
                  }}
               />
            </div>

            <div id="canvasArea"
               className="bg-white rounded-2xl"
               style={{
                  width: `${size.width}px`,
                  height: `${size.height}px`
               }}>

            </div>
         </div>
      </>
   )
}

export default PreviewCanvas