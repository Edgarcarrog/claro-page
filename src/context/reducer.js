const reducer = (state, action) => {
    const objReducer = {
      SET_VIDEO_SRC: () => {
        return {
          ...state,
          videoSrc: action.payload,
        };
      },
      CHANGE_VIDEO_TEXT: () => {
        const newVideoText = [false, false, false, false];
        newVideoText[action.payload] = true;
        return {
          ...state,
          videoText: newVideoText,
        };
      },
    };
  
    return objReducer[action.type] ? objReducer[action.type]() : state;
  };
  
  export default reducer;
  