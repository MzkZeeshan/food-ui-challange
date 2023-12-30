import React from "react";
import { Link } from "react-router-dom";

function Header({ first = "", middle = "", last = "" }) {
  return (
    <Link to="/" className="flex justify-between items-center mb-[16px]">
      <div>{first}</div>
      <div className="text-[25px] font-semibold ">{middle}</div>
      <div className="w-[20px]">{last}</div>
    </Link>
  );
}

export default Header;
