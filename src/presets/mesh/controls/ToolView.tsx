import { Slider } from "../../../components/Slider";
import type { SvgProps } from "../types";
import { effectControls } from "./tools.config";

type ToolViewProps = {
   mesh: SvgProps
   onEffectChange: (id: string, value: number) => void
}
export function ToolView({ mesh, onEffectChange }: ToolViewProps) {

   // Style Variable
   const toolSectionClass = `relative flex flex-col items-center h-fit w-full`
   const currentColorItem = `inline-block w-7 h-7 rounded-sm`

   // mesh.shapeDat.map((color) => {
   //    console.log(color.color)
   // })

   return (
      <>
         <div className="flex flex-col gap-6 w-full py-3">

            <div className={`${toolSectionClass}`}>
               <h1 className="text-md w-full">Current Color</h1>
               <div className="currentColor flex gap-1.5 w-full">
                  {mesh.colorShape.map((color) => (
                     <span
                        key={color.color}
                        style={{ background: color.color }}
                        className={`${currentColorItem}`}></span>
                  ))}
               </div>
            </div>


            <div className={`${toolSectionClass}`}>
               <h1 className="text-md w-full">Effects</h1>

               {effectControls.map((control) => (
                  <Slider
                     key={control.id}
                     id={control.id}
                     label={control.label}
                     value={mesh.effects[control.id]}
                     min={control.min}
                     max={control.max}
                     step={control.step}
                     onChange={(value => onEffectChange(control.id, value))}
                  />
               ))}
            </div>
         </div>
         <div className="h-full"></div>
      </>
   )
}




{/* <span className={`${currentColorItem}`}></span>
               <span className={`${currentColorItem}`}></span>
               <span className={`${currentColorItem}`}></span> */}

{/* <p className="px-3 py-1.5 text-2xl">
               Sidebar:<br/>Blur, Opacity, Grain Effect, Noise, Edit Color<br/><br/>
               On Preview edit: Rotate Shape, Drag Shape, Scale Shape
            </p> */}