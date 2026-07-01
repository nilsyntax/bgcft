function PreviewCanvas(){
   return(
       <>
         <div id="previewCanvas" className="w-fit h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div id="previewTool" className="h-8 w-full"></div>
            <div id="canvasArea" className="w-200 h-120 bg-white rounded-2xl"></div>
         </div>
       </>
   )
}

export default PreviewCanvas