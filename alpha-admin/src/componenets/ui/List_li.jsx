import React from "react";

function List_li({ className, number = 0,value }) {
  return (
    <>
      {number.map((tag,index) => {
        return <li tabIndex={0} className={className} key={index}>{tag}</li>;
      })}
    </>
  );
}

export default List_li;
