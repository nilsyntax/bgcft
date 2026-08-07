import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import PresetList from "./layout/PresetList"
import PreviewArea from "./layout/PreviewArea"

import { make } from "./presets/mesh/core/make"

function App() {
  const [meshBg, setMeshBg] = useState(make())

  const handleGeneration = () => setMeshBg(make())

  const handleEffectChange = (id: string, value: number) => {
   setMeshBg(prev => ({
    ...prev,
    effects: {
      ...prev.effects,
      [id]: value,
    }
   }))
  }


  return (
    <>
      <div className="relative flex h-screen w-full p-2">
        <Sidebar 
        onGenerate={handleGeneration}
        mesh={meshBg}
        onEffectChange={handleEffectChange}
        />
        <PreviewArea mesh={meshBg}/>
        <PresetList />
      </div>
    </>
  )
}

export default App

