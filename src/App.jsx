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
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const onClickComplete = (index) => {
    const newTodos = [...todos];
    const newCompleteTodos = [...todids, todos[index]];

    newTodos.splice(index, 1);

    setTodos(newTodos);
    setTodids(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newTodids = [...todids];
    const newTodos = [...todos, todids[index]];

    newTodids.splice(index, 1);

    setTodids(newTodids);
    setTodos(newTodos);
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
          {todids.map((item, index) => {
            return (
              <div key={item} className="list">
                <li>{item}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
