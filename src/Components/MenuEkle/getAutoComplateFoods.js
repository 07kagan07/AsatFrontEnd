const axios = require("axios").default;

export function getAutoComplateFoods() {
  const data = axios.get(process.env.REACT_APP_LOCAL_IP + "/food");
  return data;
}
