const store = {
  show: false,
  url: "http://172.16.15.240:3000",
  trigger: "null",
  pushToken: ''
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
