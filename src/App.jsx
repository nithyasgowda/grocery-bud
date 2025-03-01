import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";

// setLocalStorage and defaultList were declared globally to avoid re-declaration on every render.

// storing data in the localStorage.
const setLocalStroage = (itemsList) => {
  localStorage.setItem("list", JSON.stringify(itemsList));
};
// fetching the data from the localStorage.
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultList);
  // To add the items to the list
  const addItem = (itemName) => {
    // checks and shows error if the item already exists.
    let res=items.find((item)=>{
      return item.name.toLowerCase()===itemName.toLowerCase();
    })
    if(res){
      toast.dismiss();
      toast.error(`'${itemName}' already exists`)
      return;
    }
    // creats a object of newItem and adds to the list.
    let newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItemsList = [...items, newItem];
    setItems(newItemsList);
    setLocalStroage(newItemsList);
    toast.dismiss();
    toast.success(`'${itemName}' added to the list`);
  };

  // To remove the items form the list
  const removeItem = (id, item) => {
    const newFilteredItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newFilteredItems);
    setLocalStroage(newFilteredItems);
    toast.dismiss();
    toast.success(`'${item}' removed from the list`);
  };

  // To mark the checked items in the list
  const editItem = (id, isChecked) => {
    const newEditItems = items.map((item) => {
      return item.id === id ? { ...item, completed: isChecked } : item;
    });
    setItems(newEditItems);
    setLocalStroage(newEditItems);
  };

  // App components
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
