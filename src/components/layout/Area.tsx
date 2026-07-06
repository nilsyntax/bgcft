import Sidebar from "./Sidebar"
import PreviewArea from "./PreviewArea"
import StyleList from "./StyleList"

function Area(){
   return (
      <div id="area" className="w-full h-full flex px-2 py-4">
         <Sidebar/>
         <PreviewArea/>
         <StyleList/>
      </div>
   )
}

export default Area