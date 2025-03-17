import React from "react";
import { RxCross2 } from "react-icons/rx";

const Pills = ({ selectedUser, onClose }) => {
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        {selectedUser?.map((user, index) => {
          return (
            <div
              onClick={(e) => onClose(e, user)}
              className="bg-blue-500 p-2 rounded-md flex items-center gap-2 cursor-pointer"
              key={index}
            >
              <div className="flex items-center gap-1">
                <img
                  className="h-[20px] w-[20px]"
                  src={user.image}
                  alt={user.firstName}
                />
                <p>{user.firstName}</p>
              </div>
              <RxCross2
                onClick={(e) => onClose(e, user)}
                fill="red"
                cursor={"pointer"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pills;
