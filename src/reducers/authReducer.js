import { TYPES } from "../types/types";

const initialValue = {
  user: {},
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        user: action.payload,
      };

    case TYPES.logout:
      return {};

    default:
      return state;
  }
};
