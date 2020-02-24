const store = {
<<<<<<< HEAD
  show: false,
  url: "http://172.16.15.240:3000",
  trigger: "null"
};
=======
    show: false,
    url: 'http://192.168.43.77:3000',
    trigger: 'null'
}
>>>>>>> Want to pull request

export default function user(state = store, action) {
  switch (action.type) {
    case "SET_SHOW":
      return { ...state, show: action.val };
    case "SET_TRIGGER":
      return { ...state, trigger: action.val };
    default:
      return state;
  }
}
