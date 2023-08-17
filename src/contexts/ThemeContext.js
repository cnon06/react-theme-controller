import { createContext, useReducer} from "react";
import themeReducer from "../reducers/themeReducer";



export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // const [color, setColor] = useState("warning")

  const [state, dispatch] = useReducer(themeReducer,{color: "warning"});

  const  changeColor = (value) => 
  {
    dispatch({type: "CHANGE_COLOR", payload: value})
    
  }

  const  changeMode = (value) => 
  {
    dispatch({type: "CHANGE_MODE", payload: value})
    
  }
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
