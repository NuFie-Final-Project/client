const store = {
  show: false,
  url: "http://ec2-18-219-119-178.us-east-2.compute.amazonaws.com:55555",
  trigger: "null",
  pushToken: ""
};

export default function user(state = store, action) {
  switch (action.type) {
    case "SET_SHOW":
      return { ...state, show: action.val };
    case "SET_TRIGGER":
      return { ...state, trigger: action.val };
    case "SET_PUSHTOKEN":
      return { ...state, pushToken: action.val };
    default:
      return state;
  }
}
