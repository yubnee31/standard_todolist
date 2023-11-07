import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "내용2",
      contents: "내용2",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <header>My Todo List</header>
      <main>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newTodo = {
                id: todo.length + 1,
                title,
                contents,
                isDone: false,
              };
              setTodo([...todo, newTodo]);
            }}
          >
            <input
              value={title}
              onChange={function (event) {
                return setTitle(event.target.value);
              }}
            />
            <input
              value={contents}
              onChange={function (event) {
                return setContents(event.target.value);
              }}
            />

            <button type="submit">추가</button>
          </form>
        </div>
        <h2>할일목록</h2>
        {todo
          .filter(function (todos) {
            return todos.isDone === false;
          })
          .map(function (todos) {
            return (
              <div key={todos.id} style={{ border: "3px solid black" }}>
                <p>{todos.id}</p>
                <p>{todos.title}</p>
                <p>{todos.contents}</p>
                <p>완료: {todos.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const removeTodo = todo.filter((value) => {
                      return value.id !== todos.id;
                    });
                    setTodo(removeTodo);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const switchTodo = todo.map((value) => {
                      if (value.id === todos.id) {
                        return { ...value, isDone: !value.isDone };
                      } else {
                        return value;
                      }
                    });

                    setTodo(switchTodo);
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}

        <div>
          <h2>완료목록</h2>
          {todo
            .filter(function (todos) {
              return todos.isDone === true;
            })
            .map(function (todos) {
              return (
                <div key={todos.id} style={{ border: "3px solid black" }}>
                  <p>{todos.id}</p>
                  <p>{todos.title}</p>
                  <p>{todos.contents}</p>
                  <p>완료: {todos.isDone.toString()}</p>
                  <button
                    onClick={() => {
                      const removeTodo = todo.filter((value) => {
                        return value.id !== todos.id;
                      });
                      setTodo(removeTodo);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      const switchTodo = todo.map((value) => {
                        if (value.id === todos.id) {
                          return { ...value, isDone: !value.isDone };
                        } else {
                          return value;
                        }
                      });

                      setTodo(switchTodo);
                    }}
                  >
                    취소
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
