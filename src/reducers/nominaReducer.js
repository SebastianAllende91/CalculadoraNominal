import { TYPES } from "../types/types";

const initialState = {
  data: [],
};

export const nominaReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.nominaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case TYPES.nominaRead:
      return {
        ...state,
        data: action.payload,
      };

    case TYPES.nominaDelete:
      return {
        ...state,
        data: state.data.filter((nomina) => {
          return nomina.id !== action.payload;
        }),
      };

    case TYPES.nominaClean:
      return initialState;

    default:
      return state;
  }
};
