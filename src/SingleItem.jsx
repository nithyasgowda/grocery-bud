import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SingleList = ({ item, removeItem, editItem }) => {
  const { name, completed, id } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(!isChecked);
          editItem(id, e.target.checked);
        }}
      />
      <p
        style={{
          textDecoration: isChecked && "line-through",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <button className="remove-item" onClick={() => removeItem(id, name)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default SingleList;
