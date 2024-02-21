import { useContext } from "react"
import { datos2 } from "./datos"
import { Context } from "./context/Context"
import { useForm } from "react-hook-form"
import { Resumen } from "./Resumen"
import { useNavigate } from "react-router-dom"

export const Form =() => {
  const navegacion =  useNavigate()
  const {register, handleSubmit, formState:{errors}, setFocus, reset, watch} = useForm()
  const {etapas, setEtapas, misDatos, setMisDatos} = useContext(Context)
  const obtener = (data) => {
    console.table(data)
    misDatos[etapas] = data.valor;
    setEtapas(etapas+1);
    setFocus('valor')
    reset()
  }

  const imprimir =() => {
    window.print()
  }
  const volver =() => {
    setEtapas(0)
    setMisDatos([])
    navegacion('/home')
  }

  return (
    <>
    <section className="seccion">
    {etapas> 6 
    ? <div className="opciones"> 
    <h2>Quieres modificar los datos o finalizar e imprimir tu pedido</h2>
    <button onClick={volver}>Volver</button>
    <button onClick={imprimir} >Imprimir</button>
    </div>
    :
    
    
    <form onSubmit={(handleSubmit(obtener))}>

    <h2>{datos2[etapas].texto}</h2>
    <span className="verde">
      {watch('valor')}
      {watch('valor.length') > 0 &&
      <span>
      {datos2[etapas].sufijo}
      </span>}
    </span>
    <input autoFocus autoComplete="off" 
    {...register('valor', 
    {
      required:datos2[etapas].obligatorio,
      min:datos2[etapas].minimo,
      max:datos2[etapas].maximo
    })}
    />
    {errors.valor?.type === 'required' && <p>Este dato es obligatorio</p>}
    {errors.valor?.type === 'min' && <p>Demasiado poco minimo deberia ser {datos2[etapas].minimo}</p>}

    {errors.valor?.type === 'max' && <p>El maximo es {datos2[etapas].maximo} </p> }
    <hr/>
    <input type="submit" value='enviar' />
    </form>}
    <Resumen/>
    </section>
    </>
  )
}