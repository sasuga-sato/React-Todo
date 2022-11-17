import React, { useState } from "react";
import "./styles.css";
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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 第二引数に順番が入る */}
          {incompleteTodos.map((todo, index) => {
            return (
              // mapを使ってレンダリングする際にはkeyを設定
              // 仮想DOMの差分を正確に反映するため何個目のループする際何個目のループなのか分かるようにkeyを設定
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数をわたす際にはアロー関数で新しい関数を作る必要がある */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onclick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
