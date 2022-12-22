import React from "react";
import { Link } from "react-router-dom";

export default function Buttons(props) {
  let style = "btn";
  if (props.size) style += " " + props.size;
  if (props.color) style += " " + props.type;
  if (props.link) {
    return (
      <Link to={props.link}>
        <button className={style} type={props.type} onClick={props.onClick}>
          {props.name}
        </button>
      </Link>
    );
  }
  return (
    <button className={style} type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
