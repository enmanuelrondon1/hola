import {  useState } from "react";
import { Context } from "./Context";



export const Provider = ({ children }) => {
  const [etapas, setEtapas] = useState(0);
  const [misDatos, setMisDatos] = useState([])

  return (
    <Context.Provider value={{ etapas, setEtapas, misDatos, setMisDatos }}>
      {children}
    </Context.Provider>
  );
};