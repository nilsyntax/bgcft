import Toolbar from "../ui/Toolbar"
import Toolcard from "../ui/Toolcard"

function Sidebar() {
   return (
      <>
         <div className="h-full w-full max-w-50 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border">
            {/* <Toolbar/> */}
            <Toolcard />
         </div>
      </>
   )
}

export default Sidebar