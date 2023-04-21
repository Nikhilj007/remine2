import React, { useEffect, useState } from "react";
import { logo} from "../assets";

const Navbar = () => {
  return (
    <div className="bg-transparent flex p-5 justify-between">
      <img width={"80px"} src={logo} alt="" />
      <div className="flex">
        <div className="text-green text-xl font-bold">Home</div>
      </div>
    </div>
  )
}

export default Navbar
