import {INCREMENT, RESET, ADD, DELETE, UPDATE} from './action/Action'
import {DECREMENT} from './action/Action';

const initialState = {
  count: 0,
  todo: [],
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// const newdata = {
//     todo : [],

// }

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE:
      return {
        ...state,
        todo: state.todo.filter((todo: any) => todo.id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        todo: state.todo.map((todo: any) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              data: action.payload.data,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
