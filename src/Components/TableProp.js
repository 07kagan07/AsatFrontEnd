// import React from "react";

// const Table = (props) => {
//   return (
//     <tr>
//       <td>{props.day}</td>
//       <td>{props.date}</td>
//       <td>{props.foods}</td>
//     </tr>
//   );
// };

// export default Table;
import React, { useState } from "react";

const BasicForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="userId">UserId</label>
          <input
            type="number"
            name="userId"
            id="userId"
            autoComplete="off"
            value={userId}
            onChange={(u) => setUserId(u.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(u) => setPassword(u.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default BasicForm;
