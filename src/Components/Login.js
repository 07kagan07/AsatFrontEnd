import React, { useState } from "react";

const Login = () => {
  const [sicilNo, setsicilNo] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  async function auth(food, calorie) {
    console.log(food);
    console.log(calorie);
  }

  const submitForm = (u) => {
    u.preventDefault();
    const newEntry = { sicilNo: sicilNo, password: password };

    setAllEntry([...allEntry, newEntry]);
    auth(sicilNo, password);
  };

  return (
    <div className="container">
      <div className=" col-md-3  ">
        <div className="row ">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Sicil No/ TC Kimlik No
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={sicilNo}
                onChange={(u) => setsicilNo(u.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(u) => setPassword(u.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

/* <div className="mb-3">
  <form onSubmit={this.handleSubmiy}>
    <labe className="form-label">
      Sicil No:
      <input
        className="form-control"
        value={this.state.value}
        onChange={this.handleChange}
      />
    </labe>
    <button className="btn btn-primary" type="submit" value="Send">
      Send
    </button>
  </form>
</div>; */
