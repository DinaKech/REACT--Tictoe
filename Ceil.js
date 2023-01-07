import React from "react";

export default function Ceil({ onClick, num, cells }) {
  console.log("C", num);
  return (
    <td num={num} onClick={() => onClick(num)}>
      {cells[num]}
    </td>
  );
}
