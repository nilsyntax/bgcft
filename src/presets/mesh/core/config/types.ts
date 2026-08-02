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


// defination for color palette
export interface BGColor {
  id: string
  color: string
}

export interface ColorPalette {
  id: string
  colors: string[]
  bgColor: string[]  // background color id
}


