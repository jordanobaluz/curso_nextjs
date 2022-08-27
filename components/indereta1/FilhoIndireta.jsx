export default function FilhoIndireta(props) {
    return (
        <div>
            <h3>Filho</h3>
            <button onClick={props.funcao}>
                Falar com o pai #01
            </button>
            <button onClick={() => props.funcao("Passei no Enem!", "uhuuu")}>Falar com o pai #02
            </button>
        </div>
    )
}

// não existe uma comunica direta entre componentes filho e pai