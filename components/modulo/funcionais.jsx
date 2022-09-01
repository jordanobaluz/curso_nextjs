//criado minusculo, pois terá vários componentes diferentes para trabalhar import
//por regra se usa Inicial Maiuscula para componentes com 1 unico metodo
//se exporta por default, não importa o nome no import
//se não usar export default, somente export, irá importar o nome do componente, pois precisa importar com o mesmo nome

export function Comp1() {
    return <h2>Comp1 - export function</h2>
}

export const Comp2 = function () {
    return <h2>Comp2 - export anonymous function</h2>
}

export default function Comp3() {
    return <h2>Comp3 - export default a function</h2>
}

export const Comp4 = () => {
    return <h2>Comp4 - export an arrow function</h2>
}

export const Comp5 = () => <h2>Comp5 - export arrow function implicet return</h2>

export const Comp6 = (props) => (
    <div>
        <h2>Comp6 - {props.msg} </h2>
    </div>
)