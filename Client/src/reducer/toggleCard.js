const initialState = {
  status: false,
  dimension: "",
};

const toggleCard = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        status: !state.status,
      };
    case "CLOSE":
      return {
        ...state,
        status: !state.status,
      };
    case "SET-IN-X":
      return {
        ...state,
        dimension: "X",
      };
    case "SET-IN-Y":
      return {
        ...state,
        dimension: "Y",
      };
    default:
      return state;
  }
};

export default toggleCard;
