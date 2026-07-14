type ButtonProps = {
   value: string;
   color: string;
   onClickAction: () => void;
}

export default function Button({ value, color, onClickAction }: ButtonProps) {
   return (
      <button onClick={onClickAction}
         className="absolute left-1/2 translate-x-[-50%] bottom-2 h-fit w-fit rounded-lg px-4 py-2 text-white hover:bg-blue-700 transition-colors"
         style={{backgroundColor: color}}
      >{value}</button>
   )
}