import React from "react";

function TotalSold(props) {
  return (
    <div className="bg-blue-500 text-white p-4 flex flex-col items-center">
      <div className="mb-2">{props.count}</div>
      <div className="mb-2">{props.soldData}</div>
      <div>{props.sold}</div>
    </div>
  );
}

export default TotalSold;
