import { useState } from "react";

interface IProps {
    value: string;
    onSquareClick: any;
}

export function Square({value, onSquareClick}: IProps) {
//   const [value, setValue] = useState<string>("");

//   const handleClick = () => {
//     setValue("X");
//   };

  return (
    <button 
        className="square" 
        onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
