import { useState } from "react"

export default function Formulario() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        width: "250px"
    }
    const [valor, setValor] = useState("inicial")
    return (
        <div style={estilo}>
            <span>Reflete valor alterado no input: {valor}</span><br />
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={() => setValor(valor + "!")}>Alterar</button>
        </div>
    )
}

//os dados estaram sempre dentro do estado do componente, primeiro o estado precisa ser alterado, para depois o componente refletir a alteração feita