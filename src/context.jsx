import { list } from "postcss";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListContext = createContext();

const storage = () => {
  let lists = localStorage.getItem("mylist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
export const ListProvider = ({ children }) => {
 
  const [title, setTitle] = useState("");
  const [list, setList] = useState("");
  const [item, setItem] = useState(storage);

   const [isEditing, setIsEditing] = useState(false);
   const [editId, setEditId] = useState(null);


  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(item));
  }, [item]);

  const [alert, setAlert] = useState({
    msg: "",
    show: false,
  });

  const showAlert = ({ show = false, msg = "" }) => {
    setAlert({
      show,
      msg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !list) {
      showAlert(true, "Please input some values in the form lists ");
    }else if (title && list && isEditing) {
      const editList = item.map((items) => {
        if (items.id === editId) {
          return {...items, title:title, list:list}
        }
        return items;
      })
      setItem(editList)
       setList("");
       setTitle("");
        setIsEditing(false);
        setEditId(null);
    } else {
      showAlert(true, " Success ");
      const newList = {
        id: Math.random(),
        title,
        list,
      };
      setItem([...item, newList]);
    }

    setList("");
    setTitle("");
  };

  const handleDelete = (id) => {
    const removeItem = item.filter((items) => items.id !== id);
    setItem(removeItem);
  };


  const handleEdit = (id) => {
    setIsEditing(true)
    const edited = item.find((items) => items.id === id)

    setTitle(edited.title)
    setList(edited.list)
    setEditId(id)
  }

  return (
    <ListContext.Provider
      value={{
        handleSubmit,
        item,
        alert,
        list,
        title,
        setList,
        setTitle,
        setItem,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
