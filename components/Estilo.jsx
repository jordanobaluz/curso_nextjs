export default function Estilo(props) {
    return (
        <div style={{
            backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
            color: props.color,
        }}>
            <h1>Texto Teste</h1>
        </div>
    )
}