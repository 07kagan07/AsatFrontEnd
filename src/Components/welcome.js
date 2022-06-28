import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const name = ["ASAT "];

    return (
      <div>
        {name.map((name) => (
          <h1 style={{ margineTop: "1rem" }}>Merhaba {name}</h1>
        ))}
      </div>
    );
  }
}
export default Welcome;
