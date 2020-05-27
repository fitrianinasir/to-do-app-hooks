import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div className="task-item" key={item.key}>
            <input
              type="text"
              id={item.key}
              value={item.text}
              onChange={(e) => props.changeItem(e.target.value, item.key)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="float-right text-light mt-1"
              onClick={(e) => props.deleteItem(item.key)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default List;
