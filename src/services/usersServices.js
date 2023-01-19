import instance from "./axios.js";

const getUsers = () => {
  return instance.get("/users");
};

export default getUsers;
