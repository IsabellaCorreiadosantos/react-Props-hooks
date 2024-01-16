import { useState } from 'react'
import { useEffect } from 'react'
import './Task.css'

function Task() {
  //variaveis de estado
  const [completado, setcompletado] = useState(false)// boolean
  const [tarefa, setTarefa] = useState('')//string

  //função a ser disparada / um gatilho (algo a ser analizado)
  useEffect(() => {
   
    if(completado == true){
      setTarefa("tarefa concluida")
    }

  }, [completado])

/*
function () {} === () => {}
*/

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick={() => {setcompletado(true) }}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task