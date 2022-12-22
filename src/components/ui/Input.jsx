import React from "react";

export default function Input(props) {
  let style = "input";
  if (props.size) style += " " + props.size;
  return (
    <input
      className={style}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      autoComplete={props.autoComplete}
    />
  );
}
