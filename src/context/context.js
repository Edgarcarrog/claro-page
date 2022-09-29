import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    videoSrc: null,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(reducer, initialState);

  const setVideoSrc = (src) => {
    dispatch({
      type: "SET_VIDEO_SRC",
      payload: src,
    });
  };

  return (
    <context.Provider
      value={{
        videoSrc: state.videoSrc,
        setVideoSrc,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
