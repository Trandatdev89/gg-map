function ChangeSlider(state = 0, action) {
  switch (action.type) {
    case "img":
      return action.value;
    default:
      return state;
  }
}

export default ChangeSlider;
