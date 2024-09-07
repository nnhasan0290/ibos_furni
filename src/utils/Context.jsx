import { createContext, useContext, useReducer } from "react";

const UserContext = createContext({});

const reducer = (state, action) => {
  console.log(state, action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter((each) => each.id !== action.payload.id);

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, []);
  return (
    <UserContext.Provider value={{ state: userData, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;

export const ContextConsumer = () => useContext(UserContext);
