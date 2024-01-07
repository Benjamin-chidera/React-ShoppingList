import React, { useContext } from "react";
import { ListContext } from "../context";

export const Form = () => {
  const { handleSubmit, item, list, title, setList, setTitle, setItem } =
    useContext(ListContext);

  return (
    <div className=" flex justify-center items-center h-[70vh] shadow-2xl w-[400px] mt-5 mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="text-xl font-medium">Title</label>
          <input
            type="text"
            className=" border h-[40px] w-[300px] rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2 mt-5">
          <label className="text-xl font-medium">List</label>
          <textarea
            type="text"
            className=" border h-[100px] w-[300px] rounded p-2"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
        </div>

        <button className="bg-red-200 mt-4 py-1 px-5 rounded-md text-lg font-bold text-white">
          Sumbit
        </button>
      </form>

      {item.length > 0 && (
        <button
          className="bg-red-500 mt-4 py-1 px-5 rounded-md text-lg font-bold text-white absolute top-0 right-2"
          onClick={() => {
            setItem([]);
          }}
        >
          clear List
        </button>
      )}
    </div>
  );
};
