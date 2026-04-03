import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-3 shadow-md">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
          alt="logo"
          className="w-8 h-8 drop-shadow-md"
        />
        <h1 className="text-2xl font-bold">Data Explorer</h1>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-lg text-white w-full md:w-1/3 border-3 border-white"
      />
    </div>
  );
};

export default Navbar;
