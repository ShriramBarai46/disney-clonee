/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import ProfileImg from '../assets/Images/profileImg.jpeg'

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },

    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },

    {
      name: "WATCH LIST",
      icon: HiPlus,
    },

    {
      name: "ORIGINAL",
      icon: HiStar,
    },

    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },

    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center gap-8 justify-between">
      <div className="flex items-center gap-8 p-5">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* responviness div for mobile */}
        <div className="md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />

            {/* onClick functinality for dropdown */}
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <img
        src={ProfileImg}
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
