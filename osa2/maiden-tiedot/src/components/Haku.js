import React from "react";

const Haku = ({handleHaku, haku}) => {
  return (
    <div>
      Find countries <input value={haku} onChange={handleHaku} />
    </div>
  );
};

export default Haku;
