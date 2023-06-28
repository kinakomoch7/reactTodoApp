import React from "react";

export const IncompleteArea = (props) => {
  const { todos, onComplete, onDelete } = props;
  return (
    <div className="incompleteArea">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((item, index) => {
          return (
            <div key={index} className="list">
              <li>{item}</li>
              <button onClick={() => onComplete(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
