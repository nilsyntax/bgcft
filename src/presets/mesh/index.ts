
/*
Now, I have done about mesh generation and preview. It's time to add the control and effect tools.

Here's some few things now I want to add and update. 

From Sidebar: Blur, Opacity, Grain Effect, Noise, Edit Color
On Preview edit: Rotate Shape, Drag Shape, Scale Shape (We will talk about this latter)

Now I want to focus on From Sidebar: Blur, Opacity, Grain Effect, Noise, Edit Color.

This is how I am thinkg, let me know if I am correct?

There will be config file for the tools and controls with default value and data.
With this will render the edit and controls tools in UI(sidebar)
User intract with the tools, which change the state data of generated mesh gradient

For grain, noise default value will be 0
For Blur, Opacity, default value will be that is written in the make.ts (that generates mesh data)
I am thinking I need to set a dafult value configuration for mesh gradient, that will go into make.ts by default and for configuration of some tools.

*/




const def = {
   scale: 6,
   blur: 60,
   opacity: 0,
   grain: 0,
   noise: 0,
   brightness: 0,
   contrast: 0,
   hue: 0
}


/*

*/


// import { use, useState } from "react";
// import { makeMesh } from "./core/makeMesh";

// function handleGenerate(){
//    const [meshBg, generateMeshBg] = useState(makeMesh())

//    function setMesh(){
//       generateMeshBg(makeMesh)
//    }

// }