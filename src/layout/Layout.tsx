import Sidebar from "./Sidebar"
import PreviewArea from "./PreviewArea"
import StyleList from "./PresetList"

function Area(){
   // I can do it here
   
   return (
      <div id="area" className="w-full h-full flex px-2 py-4">
         <Sidebar/>
         <PreviewArea/>
         <StyleList/>
      </div>
   )
}

export default Area