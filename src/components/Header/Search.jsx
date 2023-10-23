import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${searchValue}`);
  };

  useEffect(() => {
    setSearchValue(keyword || "");
  }, [keyword]);

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <input
        className="outline-none bg-black text-gray-50 w-7/12 py-2 px-4"
        type="text"
        placeholder="검색어를 입력해 주세요"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit" className="bg-zinc-600 px-4">
        <BsSearch />
      </button>
    </form>
  );
}
