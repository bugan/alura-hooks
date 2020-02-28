import React, { useState, useEffect } from 'react';
import Tarefas from './components/Tarefas';
import NovaTarefa from './components/NovaTarefa';
import TarefasContext from './context/tarefas'


const App = () => {
  // Bugan, isso aqui é importante pra ele não ficar re-renderizando no context sem necessidade
  const [tarefasContext, setTarefasContext] = useState({
    tarefas: [],
    removeTarefa: id => {
      const tarefasAtualizadas = tarefasContext.tarefas.filter((tarefa) => tarefa.id !== id)

      // Aqui também, falando de hooks acho que é importante mostrar a diferença do mapeamento das propriedades pro estado, tinha feito com objeto aqui e sem objeto no outro pra conseguir mostrar isso melhor
      setTarefasContext({...tarefasContext, tarefas: tarefasAtualizadas})
    } 
  })
  
  const adicionaTarefa = novaTarefa => {
    // Aqui talvez seja legal explicar a diferença de contat pra push, falar de imutabilidade, etc
    const tarefasAtualizadas = tarefasContext.tarefas.concat(novaTarefa)
    setTarefasContext({...tarefasContext, tarefas: tarefasAtualizadas})
  }

  return (
    <TarefasContext.Provider value={tarefasContext} >
      <Tarefas />

      <NovaTarefa adicionaTarefa={adicionaTarefa} />
    </ TarefasContext.Provider>
  );
}

export default App;
