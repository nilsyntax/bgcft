// defination for svg shape paths
export interface Path {
  d: string
  width: number
  height: number
  center: {
    x: number
    y: number
  }
}

// defination for shape position
export interface Position {
  x: number
  y: number
}

export type Layout = Position[]

export type LayoutMap = {
  [count: number] : Layout[]
}

export interface ShapeProps {
  path: Path
  color: string
  position: Position
  scale: number
  blur: number
}

export type SvgProps = {
   background: string;
   shapeDat: ShapeProps[];
}

export interface ColorPalette {
  id: string
  colors: string[]
  bgColor: string[]  // background color id
}

export interface ColorTheme {
  id: string
  colors: string[]
}

