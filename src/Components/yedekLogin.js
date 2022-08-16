import React, { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (u) => {
    u.preventDefault();
    const newEntry = { userId: userId, password: password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
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
      <div>
        {allEntry.map((curElem) => {
          return (
            <div className="showDataStyle">
              <p>{curElem.userId}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Login;
