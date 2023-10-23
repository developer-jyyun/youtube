// import React, { useState } from "react";
import Search from "./Search";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex w-full p-4 text-2xl border-b border-zinc-600">
      <Link to="/" className=" flex items-center">
        <BsYoutube className="text-brand text-4xl" />
        <h1 className="font-bold ml-2 text-3xl"> YouTube</h1>
      </Link>
      <Search />
    </header>
  );
}
