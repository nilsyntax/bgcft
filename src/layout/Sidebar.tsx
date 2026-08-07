import HidePanel from "@/assets/icons/hidepanel.svg?react";
import Button from "../components/Button";
import { ToolView } from "../presets/mesh/controls/ToolView";
import type { SvgProps } from "../presets/mesh/types";


type SidebarProps = {
   onGenerate: () => void;
   mesh: SvgProps
   onEffectChange: (id: string, value: number) => void
}

function Sidebar({ onGenerate, mesh, onEffectChange }: SidebarProps) {

   const sidebarClass = `flex flex-col gap-4 h-full w-60 min-w-60 rounded-xl bg-gray-50/0 px-0 shadow-[0_8px_30px_rgba(0,0,0,0.0)]`

   const sidebarTitleClass = `flex justify-between items-center h-fit w-full my-0 rounded-xl bg-gray-50/60 px-3 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.08)]`



   return (
      <>
         <div id="sidebar" className={`${sidebarClass}`}>

            <div className={`${sidebarTitleClass}`}>
               <p className="text-l">A Name🙏</p>
               <HidePanel className="text-gray-600 w-8 h-8 p-1 cursor-pointer" />
            </div>
            <div className="toolArea relative flex flex-col items-center h-full w-full my-0 rounded-xl bg-gray-50/60 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

               <ToolView mesh={mesh} onEffectChange={onEffectChange} />
               <Button
                  value="Randomize"
                  onClick={onGenerate}
                  className="w-full bg-violet-500"
               />
            </div>

         </div>
      </>
   )
}

export default Sidebar

// class="text-2xl hover:text-white transition-all duration-100 group-hover:text-white" height="1em" width="1em" 