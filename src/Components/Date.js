import React from "react";
//import Table from "./Table";

function Vaxt() {
  const str = new Date().toLocaleDateString();
  let day = new Date().toLocaleDateString("tr-Tr", {
    weekday: "long",
  });
  return (
    <div>
      {str}, {day}
    </div>
  );
}

export default Vaxt;

/* <div>
<h4 className="text-end" style={{ marginRight: "2rem" }}>
  {str}
</h4>
</div> */
