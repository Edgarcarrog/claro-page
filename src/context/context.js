import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    videoSrc: null,
    videoText: [true, false, false, false],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setVideoSrc = (src) => {
    dispatch({
      type: "SET_VIDEO_SRC",
      payload: src,
    });
  };

  const changeVideoText = (index) => {
    dispatch({
      type: "CHANGE_VIDEO_TEXT",
      payload: index,
    });
  };

  return (
    <context.Provider
      value={{
        videoSrc: state.videoSrc,
        videoText: state.videoText,
        setVideoSrc,
        changeVideoText,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
