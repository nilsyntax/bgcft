// scale, blur, opacity, grain, noise, brightness, contrast, hue 

export interface SliderProp {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}

export const effectControls = [
  {
    id: "blur",
    label: "Blur",
    min: 100,
    max: 200,
    step: 1,
  },
  {
    id: "opacity",
    label: "Opacity",
    min: 0.5,
    max: 1.0,
    step: 1,
  },
    {
    id: "brightness",
    label: "Brightness",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    id: "contrast",
    label: "Contrast",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    id: "hue",
    label: "Hue",
    min: 0,
    max: 360,
    step: 1,
  },
  {
    id: "grain",
    label: "Grain",
    min: 0,
    max: 100,
    step: 1,
  }
] as const;


