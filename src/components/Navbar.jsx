import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListContext } from "../context";

export const Navbar = () => {
  const { item } = useContext(ListContext);
  return (
    <div className="bg-gray-500 p-5 font-semibold text-2xl text-white w-full flex  gap-5 items-center">
      <Link to={"/"}>SHOPPING-LIST</Link>
      <Link to={"/list"}>
        MY-LIST <sup>{item.length}</sup>
      </Link>
    </div>
  );
};
