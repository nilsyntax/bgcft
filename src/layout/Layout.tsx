import Sidebar from "./Sidebar"
import PreviewArea from "./PreviewArea"
import PresetList from "./PresetList"
import Button from "../components/Button"

function Layout(){
   const clickHandle = () => {
      console.log("Button Clicked");
   }

   return (
      <div id="area" className="relative h-full border border-red-300">
         <Sidebar/>
         <PreviewArea/>
         <PresetList/>
         <Button value="Randomize" onClickAction={clickHandle}/>
      </div>
   )
}

export default Layout