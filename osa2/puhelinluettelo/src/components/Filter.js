import React from "react";

const Filter = ({newQuery, handleQuery}) => {
  return (
    <div>
      filter shown with: <input value={newQuery} onChange={handleQuery} />
    </div>
  );
};

export default Filter;
