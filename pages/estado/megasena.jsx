import { useEffect, useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function Megasena() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const estiloNumeros = { display: "flex", flexWrap: "wrap" }

    const [qtd, setQtd] = useState(6)
    const [numeros, setNumeros] = useState([])
    //para iniciar a aplicação com numeros sem gerar erro de hydrating
    useEffect(() => {
        setNumeros(mega())
    }, [])


    function renderNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }

    return (
        <div style={estilo}>
            <h1>Mega Sena</h1>
            <div style={estiloNumeros}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtd} onChange={e => setQtd(e.target.value)} />
                <button onClick={() => setNumeros(mega(qtd))}>Gerar Numeros</button>
            </div>
        </div >
    )
}