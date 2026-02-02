import { useState } from "react";
import "./App.css";

function App() {
  const [color, Setcolor] = useState("white");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl">
            <button className="px-4 py-1 rounded-2xl text-white cursor-pointer" onClick={()=>Setcolor("red")} style={{backgroundColor:"red"}}>red</button>
            <button className="px-4 py-1 rounded-2xl text-white cursor-pointer" onClick={()=>Setcolor("blue")} style={{backgroundColor:"blue"}}>blue</button>
            <button className="px-4 py-1 rounded-2xl text-white cursor-pointer" onClick={()=>Setcolor("green")} style={{backgroundColor:"green"}}>green</button>
            <button className="px-4 py-1 rounded-2xl text-white cursor-pointer" onClick={()=>Setcolor("pink")} style={{backgroundColor:"pink"}}>pink</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
