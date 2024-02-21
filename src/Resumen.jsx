import { useContext } from "react";
import { Context } from "./context/Context";

export const Resumen = () => {
  const { misDatos } = useContext(Context);

  const campos = [
    "imagen",
    "zona",
    "$ por dia",
    "nombre",
    "habitaciones",
    "personas",
    "dias",
  ];

  return (
    <>
      <div className="resumen">
        <h1>Resumen:</h1>
        {campos.map(
          (campo, indice) =>
            misDatos[indice] && (
              <div className="informacion" key={indice}>
                {indice === 0 ? (
                  <img src={misDatos[indice]} />
                ) : (
                  <div className="linea">
                    <div className="columna1">{campo}</div>
                    <div className="columna2">{misDatos[indice]}</div>
                  </div>
                )}
              </div>
            )
        )}
        {misDatos[3] && 
        <div className="total">
          Total: {Number(misDatos[2]) * Number(misDatos[4] || 1) * Number(misDatos[5] || 1) * Number(misDatos[6] || 1)}$
          </div>
        }
      </div>
    </>
  );
};