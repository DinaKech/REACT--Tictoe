import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createUseStyles } from "react-jss";

import "./tictac.css";
import Ceil from "./Ceil";
export default function TictoeTable() {
  const [show, setShow] = useState(true);
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9));

  const winner = () => {};

  const change = () => {
    setShow(false);
  };

  const onClick = (num) => {
    if (cells[num] !== undefined) {
      return;
    }
    let mentioned = [...cells];
    turn === "X" ? setTurn("Y") : setTurn("X");
    mentioned.fill(turn, num, num + 1);

    setCells(mentioned);
  };

  return (
    <>
      {show && (
        <h1>
          game
          <button onClick={change}>start</button>
        </h1>
      )}
      {!show && (
        <div className="container">
          <p>TURN:{turn}</p>
          <table>
            <tbody>
              <tr>
                <Ceil classname="ss" cells={cells} num={0} onClick={onClick} />
                <Ceil cells={cells} num={1} onClick={onClick} />
                <Ceil cells={cells} num={2} onClick={onClick} />
              </tr>
              <tr>
                <Ceil cells={cells} num={3} onClick={onClick} />
                <Ceil cells={cells} num={4} onClick={onClick} />
                <Ceil cells={cells} num={5} onClick={onClick} />
              </tr>
              <tr>
                <Ceil cells={cells} num={6} onClick={onClick} />
                <Ceil cells={cells} num={7} onClick={onClick} />
                <Ceil cells={cells} num={8} onClick={onClick} />
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
