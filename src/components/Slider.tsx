import { useRef } from "react";
import { type SliderProp } from "../presets/mesh/controls/tools.config";

export function Slider(props: SliderProp) {
   const trackRef = useRef<HTMLDivElement>(null);


   function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
      if (!trackRef.current) return

      const rect = trackRef.current.getBoundingClientRect()
      const trackWidth = rect.width

      const relativeX = event.clientX - rect.left
      const pointerPercentage = relativeX / trackWidth * 100

      const value = props.min + (pointerPercentage / 100) * (props.max - props.min)
      props.onChange(value)

      // console.log("RelativeX:", relativeX, "Percentage:", pointerPercentage)
      console.log(event)
   }

   const range = props.max - props.min
   const valueOffset = props.value - props.min
   const percentage = (valueOffset / range) * 100

   return (
      <div className="slider w-full py-1 select-none">

         <label className="text-xs">{props.label}</label>

         <div ref={trackRef} onPointerDown={handlePointerDown}
            className="track relative h-2 w-full bg-zinc-700 rounded-full mt-1">

            <div style={{width: `${percentage}%`}} 
            className="fill absolute left-0 top-0 h-full rounded-full bg-violet-500"/>

            <div
               className="thumb absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-2 items-center justify-center bg-white shadow-md rounded-2xl ring-2 ring-violet-500 transition-transform duration-150 hover:scale-110 active:scale-95 cursor-pointer"
               style={{left: `${percentage}%`}}
               >
               {/* Invisible larger hit area */}
               <div className="absolute h-8 w-8 rounded-full" />
            </div>

         </div>
      </div>
   );
}