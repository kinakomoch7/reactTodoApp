import { useState } from "react";
import "./styles.css";
import { CompleteArea } from "/public/CompleteArea.jsx";
import { IncompleteArea } from "/public/IncompleteArea.jsx";
import { InputArea } from "/public/InputArea.jsx";

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
      <InputArea
        todoText={todoText}
        changeText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />

      <IncompleteArea
        todos={todos}
        onComplete={onClickComplete}
        onDelete={onClickDelete}
      />

      <CompleteArea todids={todids} onBack={onClickBack} />
    </>
  );
}

export default App;
