const reducer = (state, action) => {
    const objReducer = {
        SET_VIDEO_SRC: () => {
        return {
          ...state,
          videoSrc: action.payload,
        };
      },
    };
  
    return objReducer[action.type] ? objReducer[action.type]() : state;
  };
  
  export default reducer;
  