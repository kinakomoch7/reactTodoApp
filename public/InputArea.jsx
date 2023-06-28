import React from "react";

export const InputArea = (props) => {
  const { todoText, changeText, onClickAdd } = props;
  return (
    <div className="inputArea">
      <input
        id="btn"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
