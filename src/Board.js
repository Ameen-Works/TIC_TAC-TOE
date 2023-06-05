import React from "react";

import "./Board.css";
import Box from "./Box";

function Board({Board,onClick}) {
    
  return (
    <div className="board">
        {Board.map((value, id)=>{
            return (
            <Box value={value} onClick={()=>{onClick(id)}}></Box>
            ) 
        })}
    </div>
    
  );
}

export default Board;