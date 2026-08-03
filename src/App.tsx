import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import PresetList from "./layout/PresetList"
import PreviewArea from "./layout/PreviewArea"

import { make } from "./presets/mesh/core/make"

function App() {
  const [meshBg, generateMeshBG] = useState(make())

  // const handleGeneration = () => generateMeshBG(make())

  const handleGeneration = () => {
    console.log(meshBg)
    return generateMeshBG(make())
  }

  return (
    <>
      <div className="relative flex h-screen w-full p-2">
        <Sidebar onGenerate={handleGeneration}/>
        <PreviewArea mesh={meshBg}/>
        <PresetList />
      </div>
    </>
  )
}

export default App

