import { useState } from "react"

export default function Contador() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#FFF",
        height: "100vh"
    }

    const [valor, setValor] = useState(0);

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <div style={{
                display: "flex",
                width: "250px",
                justifyContent: "space-around",
                fontSize: "2rem"
            }}>
                <button onClick={() => setValor(valor - 1)}>-</button>
                <span>Valor: {valor}</span>
                <button onClick={() => setValor(valor + 1)}>+</button>
            </div>
        </div>
    )
}