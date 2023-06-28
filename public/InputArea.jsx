import React from "react";

export const InputArea = (props) => {
  const { todoText, changeText, onClickAdd, disable } = props;
  return (
    <div className="inputArea">
      <input
        disabled={disable}
        id="btn"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeText}
      />
      <button disabled={disable} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
