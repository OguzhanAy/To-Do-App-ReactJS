import { useState, useEffect } from "react";
import "./todo.css";

function Todo({ count }) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    count(list.length);
  }, [list, count]);

  const addItem = () => {
    if (text !== "") {
      const itemDetails = {
        id: Math.floor(Math.random() * 1000),
        value: text,
        isComleted: false,
      };
      setList([...list, itemDetails]);
    }
    setText("");
  };
  const deleteItem = (e, id) => {
    e.preventDefault();
    setList(list.filter((item) => item.id !== id));
  };

  const taskComleted = (e, id) => {
    setFlag(!flag);
    e.preventDefault();
    const element = list.findIndex((item) => item.id === id);
    const newArr = [...list];
    newArr[element] = {
      ...newArr[element],
      isComleted: flag,
    };

    setList(newArr);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
        placeholder="Add to do list item..."
      />
      <button className="add-btn" onClick={addItem}>
        Add
      </button>
      <br />
      {list !== [] ? (
        <ul>
          {list.map((item) => (
            <li
              className={item.isComleted ? "crossText" : "listitem"}
              key={item.id}
            >
              {item.value}
              {flag ? (
                <button
                  className="completed"
                  onClick={(e) => taskComleted(e, item.id)}
                >
                  completed
                </button>
              ) : (
                <button
                  className="completed"
                  onClick={(e) => taskComleted(e, item.id)}
                >
                  uncompleted
                </button>
              )}

              <button
                className="delete"
                onClick={(e) => deleteItem(e, item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Todo;
