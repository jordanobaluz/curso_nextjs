export default function repeticao1() {
    const listAprovados = [
        'João',
        'Maria',
        'Carlos',
        'Ana',
        'Paulo',
        'Fernanda'
    ]

    function renderizarLista() {
        return listAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}