import { useState } from "react"

export default function mouse(props) {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#FFF",
        height: "100vh"
    }

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    function movimentMouse(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }
    return (
        <div style={estilo} onMouseMove={movimentMouse}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}