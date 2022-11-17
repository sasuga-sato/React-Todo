import React from "react";

//css in js
const style = {
  backgroundColor: "#c1f6ff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  marginTop: "0px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
