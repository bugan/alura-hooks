import React from 'react'

const valorPadrao = {
  tarefas: [
    {id: 1, titulo: 'Reunião', data: '25/03/2020', observacoes: 'Reunião sobre curso'}
  ],
  removeTarefa: () => {}
}

const TarefasContext = React.createContext(valorPadrao)

export default TarefasContext