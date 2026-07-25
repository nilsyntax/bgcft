import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import PresetList from "./layout/PresetList"
import PreviewArea from "./layout/PreviewArea"

import { makeMesh } from "./bgPresets/mesh"

function App() {
  const[meshBg, generateMeshBG] = useState(makeMesh())

  function handleGeneration(){
    generateMeshBG(makeMesh())
  }

  return (
    <>
      <div className="relative flex h-screen w-full p-2">
        <Sidebar onGenerate={handleGeneration}/>           {/* Gets the editing tools of the current selected style */}
        <PreviewArea mesh={meshBg}/>       {/*Preview of generated bg on state update*/}
        <PresetList />        {/*List the preset styles for bg generation -> Register*/}
      </div>
    </>
  )
}

export default App

// onclickaction -> call makeShape() -> set new shape to state -> import renderShape -> add state data to renderShape -> update to preview 

