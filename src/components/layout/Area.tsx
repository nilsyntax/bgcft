import Sidebar from "./Sidebar"
import PreviewArea from "./PreviewArea"

function Area(){
   return (
      <div id="area" className="w-full h-full flex">
         <Sidebar/>
         <PreviewArea/>
      </div>
   )
}

export default Area