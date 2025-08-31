import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

function SearchBox({ className,placeholde }) {
  return (
    <>
      <div className={` flex flex-row items-center p-2 ${className}`}>
        
         
          <input
          placeholder={placeholde}
            type="text"
            className="w-full  text-left p-4  h-full border-0 outline-0 text-primary-300"
            name=""
            id=""
          />
           <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-primary-300" />
        
      </div>
    </>
  );
}

export default SearchBox;
