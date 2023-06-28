import React from "react";

export const CompleteArea = (props) => {
  const { todids, onBack } = props;
  return (
    <div className="completeArea">
      <p>完了したTODO</p>
      <ul>
        {todids.map((item, index) => {
          return (
            <div key={index} className="list">
              <li>{item}</li>
              <button onClick={() => onBack(index)}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
