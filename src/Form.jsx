import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newitem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newitem) {
      toast.dismiss();
      toast.error("Please enter the item");
      return;
    }
    addItem(newitem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}> 
      <h2>Grocery Bud</h2> 
      <h6>Stay Organized, Shop Smarter!</h6>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          name="item"
          value={newitem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className="btn">Add item</button>
      </div>
    </form>
  );
};

export default Form;
