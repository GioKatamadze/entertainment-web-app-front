import getUsers from "services/usersServices.js";
import { userActions } from "store/slices/user-slice.js";

export const fetchUser = () => {
  return async (dispatch) => {
    const fetchUsersInfo = async () => {
      const response = await getUsers();
      return response.data;
    };

    try {
      const users = await fetchUsersInfo();
      dispatch(userActions.fetchUser(users));
    } catch (error) {}
  };
};
