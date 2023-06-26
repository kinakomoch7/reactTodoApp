import { useState } from "react";
import "./styles.css";

function App() {
  const [todoText, setTodoText] = useState([""]);
  const [todos, setTodos] = useState(["TODOです"]);
  const [todids, setTodids] = useState(["TODIDです"]);

  const onChangeTodoText = (event) => {
    return setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...todos];
    newTodo.slice(index, 1);
    setTodos(newTodo);
  };

  const onClickComplete = (index) => {
    alert(index);
  };

  return (
    <>
      <div className="inputArea">
        <input
          id="btn"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          {todos.map((item, index) => {
            return (
              <div key={item} className="list">
                <li>{item}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="completeArea">
        <p>完了したTODO</p>
        <ul>
          {todids.map((item) => {
            return (
              <div key={item} className="list">
                <li>{item}</li>
                <button>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
