import React, {useState} from 'react'

const NovaTarefa = ({adicionaTarefa}) => {
    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [observacoes, setObservacoes] = useState('')
    
    const escutadorDeSubmit = e => {
        e.preventDefault()
        adicionaTarefa({
            titulo,
            data,
            observacoes
        })
    }

    return (
        <form  className="form" onSubmit={escutadorDeSubmit}>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />

            <label htmlFor="data">Data</label>
            <input type="date" id="data"  value={data} onChange={e => setData(e.target.value)} />
            
            <label htmlFor="observacoes">Observações</label>
            <input type="text" id="observacoes"  value={observacoes} onChange={e => setObservacoes(e.target.value)} />

            <button>Salvar</button>
        </form>
     )
}

export default NovaTarefa