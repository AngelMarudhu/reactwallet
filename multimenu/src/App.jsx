import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Pills from "./Components/Pills";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelecteduser] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchTerm]);

  const handleSelectedUser = (user) => {
    setSelecteduser([...selectedUser, user]);
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemovePills = (e, users) => {
    // console.log(e);
    // console.log(users);
    setSelecteduser(selectedUser.filter((user) => user.id !== users.id));
    setSearchTerm("");
  };

  // console.log(selectedUser);

  return (
    <div className="w-full p-4">
      <div className="w-full border-2 p-2 rounded-md relative flex items-center flex-wrap">
        {/* Pills place */}
        <Pills selectedUser={selectedUser} onClose={handleRemovePills} />

        {/* input field search suggestions */}
        <input
          ref={inputRef}
          type="text"
          className="p-2 rounded-md focus:border-none outline-none"
          value={searchTerm}
          placeholder="Search User"
          onKeyDown={(e) => {
            if (
              e.key === "Backspace" &&
              searchTerm === "" &&
              selectedUser.length > 0
            ) {
              const lastUser = selectedUser.length - 1;
              setSelecteduser(
                selectedUser.filter((user, index) => index !== lastUser)
              );
            }
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* search suggestions */}
        <ul className="absolute max-h-[300px] top-15 scroll-auto h-[300px] overflow-auto  bg-white">
          {suggestions?.users?.map((user, index) => {
            return (
              <li
                className="flex items-center border-1 cursor-pointer"
                key={index}
                onClick={() => handleSelectedUser(user)}
              >
                <img
                  className="h-[20px]"
                  src={user.image}
                  alt={user.firstName}
                />
                <span>{user.firstName}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
