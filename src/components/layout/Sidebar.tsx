import HidePanel  from "@/assets/icons/hidepanel.svg?react";


function Sidebar() {
   return (
      <>
         <div className="h-full w-60 min-w-60 rounded-xl bg-gray-50/0 px-0 shadow-[0_8px_30px_rgba(0,0,0,0.0)]">

            <div className="flex justify-between items-center h-fit w-full my-3 rounded-xl bg-gray-50/60 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
               <p className="text-l">YOURCRAFT</p>
               <HidePanel className="text-gray-600 w-7 h-7" />
            </div>
         </div>
      </>
   )
}

export default Sidebar

// class="text-2xl hover:text-white transition-all duration-100 group-hover:text-white" height="1em" width="1em" 