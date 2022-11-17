import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  //未完了のTODO
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);

  //完了したTODO
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);
  //入力されたデータをStateのsetTodoTextで更新７－55　３：４５
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタン
  const onClickAdd = () => {
    //todoTextの値が空文字だったらreturn
    //if文の処理が1行で終わる際には｛｝を記入
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice一つ目の引数に何番目の要素かを受け取る　2つ目の引数にいくつの要素を削除するか指定
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // splice一つ目の引数に何番目の要素かを受け取る　2つ目の引数にいくつの要素を削除するか指定
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻るボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* InputTodosコンポーネントに送るprops */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      {/* IncompleteTodoコンポーネントに送るprops */}
      {/*  ↓purops名は自分で決めていい*/}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* CompleteTodosコンポーネントに送るprops */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
