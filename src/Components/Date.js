//import { Component } from "react";
//import Table from "./Table";

function Vaxt() {
  const d = new Date().getDate();
  const m = new Date().getMonth();
  const y = new Date().getFullYear();
  const str = `${d}.0${m + 1}.${y}`;

  return str;
}

export default Vaxt;

/* <div>
<h4 className="text-end" style={{ marginRight: "2rem" }}>
  {str}
</h4>
</div> */
