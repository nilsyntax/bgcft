import { useRef } from "react";
import { type SliderProp } from "../presets/mesh/controls/tools.config";

export function Slider(props: SliderProp) {

   const trackRef = useRef<HTMLDivElement>(null);
   const isDragging = useRef(false)
   // will happen
   // Pointer Down: onPointerDown: handlePointerDown() - setPointerCapture
   // Pointer Move: onPointerMove: handlePointerMove()
   // Pointer Up: onPointerUp: handlePointerMOve() - releasePointerCapture


   // hey buddy, pls recives pointer event fired on from the html div you are added to
   function updateValueByPointer(event: React.PointerEvent<HTMLDivElement>) {
      if (!trackRef.current) return

      // hey, get the heigh, width, pos, x, y of the current element that are referenced
      const trackData = trackRef.current.getBoundingClientRect()
      // const trackWidth = trackData.width

      // get the pointer event location on the element relative to the elements strating pos (left)
      const relativeX = event.clientX - trackData.left
      const clampX = Math.max(0, Math.min(relativeX, trackData.width))
      const perceVal = clampX / trackData.width * 100

      // calculate and update value according to unit
      const value = props.min + (perceVal / 100) * (props.max - props.min)
      props.onChange(value) // update notify/sent to state

      console.log(
         "Event ClientX:", event.clientX, "/n",
         "Track Left Point:", trackData.left, "/n",
         "Track width:", trackData.width, "/n",
         "RelativeX:", relativeX
      )
   }

   // setPointerCapture
   const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!trackRef.current) return

      trackRef.current.setPointerCapture(event.pointerId)
      isDragging.current = true

      updateValueByPointer(event)
   }

   const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging.current) updateValueByPointer(event)
   }

   // releasePointerCapture
   const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
      trackRef.current?.releasePointerCapture(event.pointerId)
      isDragging.current = false
   }


   // Calculate and update value in percentage for UI
   const range = props.max - props.min
   const valueOffset = props.value - props.min
   const percentage = (valueOffset / range) * 100

   return (
      <div className="slider w-full py-1 select-none">

         <label className="text-xs">{props.label}</label>

         <div ref={trackRef}
            onPointerDown={handlePointerDown}   // referenced
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="track relative h-2 w-full bg-zinc-700 rounded-full mt-1"
         >
            <div style={{ width: `${percentage}%` }}
               className="fill absolute left-0 top-0 h-full rounded-full bg-violet-500"
            />

            <div
               className="thumb absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-2 items-center justify-center bg-white shadow-md rounded-2xl ring-2 ring-violet-500 transition-transform duration-150 hover:scale-110 active:scale-95 cursor-pointer"
               style={{ left: `${percentage}%` }}
            >
               {/* Invisible larger hit area */}
               <div className="absolute h-8 w-8 rounded-full" />
            </div>

         </div>
      </div>
   );
}