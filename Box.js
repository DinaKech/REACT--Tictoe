import React from "react";

export default function Box({ a, index, toggle }) {
  return (
    <button className="item" onClick={() => toggle(index)}>
      {a}
    </button>
  );
}
