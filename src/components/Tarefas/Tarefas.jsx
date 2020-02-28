import React from 'react'
import TarefasContext from '../../context/tarefas'

const Tarefas = () => {
  return (
    <TarefasContext.Consumer>
    {
      ({tarefas, removeTarefa}) => (
        <table className="tabela">
            <thead className="tabela__cabecalho">
                <tr>
                    <td>Nome</td>
                    <td>Data</td>
                    <td>Observações</td>
                    <td>Remover</td>
                </tr>
            </thead>

            <tbody className="tabela__corpo">
                {tarefas.map(tarefa => (
                    <tr key={tarefa.id} className="tabela__linha"> 
                        <td>{tarefa.titulo}</td>
                        <td>{tarefa.data}</td>
                        <td>{tarefa.observacoes}</td>
                        <td>
                            <button onClick={() => removeTarefa(tarefa.id)}>Remover</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      )
    }
  </TarefasContext.Consumer>
  )
}

export default Tarefas