import { IS_LOADING, SUCCESS, HAS_ERROR } from './types';

export const initialState = {
  data: { hits: [], total: 0 },
  error: {},
  hasError: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: {},
        hasError: false,
      };
    case HAS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: { hits: [], total: 0 },
        error: action.payload,
        hasError: true,
      };
    default:
      return state;
  }
};