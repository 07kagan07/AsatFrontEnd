const axios = require("axios").default;

export function getAutoComplateFoods() {
  const data = axios.get("http://localhost:3000/food");
  return data;
}
