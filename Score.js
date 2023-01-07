import React, { useState } from "react";
export default function Score({ score }) {
  return (
    <div className="score">
      <span>X-{score.xscore}</span>
      <span>Y-{score.yscore}</span>
    </div>
  );
}
