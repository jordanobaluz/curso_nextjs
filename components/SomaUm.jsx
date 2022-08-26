export default function SomaUm(props) {
    // props.numero++
    //não pode realizar esse procedimento, pois props é somente leitura
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}

//sempre usar CamelCase quando trabalhar com componente
