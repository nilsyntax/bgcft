import GradientControlPanel from "../ui/GradientControlPanel"
import GradientSelect from "../ui/GradientSelect"

function Sidebar() {
   return (
      <>
         <div className="h-full w-full max-w-60 p-2">
            <GradientSelect/>
            <GradientControlPanel/>
         </div>
      </>
   )
}

export default Sidebar