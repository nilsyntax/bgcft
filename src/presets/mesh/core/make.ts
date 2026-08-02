import { pickOnce } from "../../../utils/pickOnce";
import { random } from "../../../utils/random";

import { paths } from "../config/paths";
import { bgColor, colorPalette } from "../config/colors";
import { layouts } from "../config/layout";

// type makeProps = {
//    shape: string
//    color: string
// }


function pickColor(){
   const pickColor = colorPalette[random(0, colorPalette.length)]
}
// const pickColor = colorPalette[random(0, colorPalette.length)]

console.log(pickColor)
/*
A function Return mesh recipie data
shape (d=path actually)
position
color
scale
blur

as ts rules function should have type defination for returning value


*/ 

// git commit -m "Add new config directory, write configs layers to new seperate files.
// type.ts: add type defination
// paths.ts: store paths(d) to render shape for svg
// layout.ts: define better layout and position structure for shapes to place inside svg accuratly
// color.ts: define color scheme and palette for shapes and mesh background"