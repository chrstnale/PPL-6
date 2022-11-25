import React from "react";
import axios from "axios";

const signout = async (id) => {
  await axios.post(`http://localhost:5000/api/auth/signout`)
  {
    localStorage.removeItem("accessToken");
  };
};

export default function Navbar2() {
  return (
    <div className="rounded-b-3xl flex px-10 md:px-20 md:py-[16px] items-center justify-between bg-[#D9E5D6] h-[80px]">
      <a href="/" class="flex">
        <img src="logo-black.svg " class="h-10 flex-auto"></img>
        <span class=" ml-2 mt-2 font-bold font-rubik text-xl flex-auto">
          MyLibrary
        </span>
      </a>
      <a href="/">
        <button
          type="button" 
          onClick={() => signout()}
          class="bg-green border border-black text-white font-medium font-rubik px-4 py-2 rounded hover:bg-black transition-colors">
          Logout
        </button>
      </a>
    </div>
  );
}