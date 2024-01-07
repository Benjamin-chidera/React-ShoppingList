import React, { useContext } from "react";
import { ListContext } from "../context";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const { item, setItem, handleDelete, handleEdit } = useContext(ListContext);
  const navigate = useNavigate();

  return (
    <div>
      {!item.length && (
        <h1 className="text-4xl text-center mt-3">
          Your Shopping List is Empty
        </h1>
      )}
      <div className=" flex justify-center items-center m-7 gap-5">
        {item.length > 0 && (
          <button
            className="bg-red-500 mt-4 py-1 px-5 rounded-md text-lg font-bold text-white absolute top-16 right-2"
            onClick={() => {
              setItem([]);
            }}
          >
            clear List
          </button>
        )}
        {item.map((items) => (
          <div
            key={items.id}
            className=" bg-gray-200 p-5 text-center shadow-xl rounded shadow-gray-600"
          >
            <h1 className="text-4xl text-white font-bold capitalize">
              {items.title}
            </h1>
            <h2 className="text-2xl text-white font-bold capitalize">
              {items.list}
            </h2>

            <div className="flex justify-between items-center gap-5">
              <button
                className="bg-green-500 mt-4 py-1 px-3 text-sm rounded-md font-bold text-white"
                onClick={() => {
                  handleEdit(items.id);
                  navigate("/")
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 mt-4 py-1 px-3 text-sm rounded-md font-bold text-white"
                onClick={() => handleDelete(items.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
