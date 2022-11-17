import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 第二引数に順番が入る */}
        {todos.map((todo, index) => {
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
  );
};
