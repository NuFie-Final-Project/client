const store = {
  show: false,
  url: "http://192.168.43.247:3000",
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
