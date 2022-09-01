import Padrao, { Comp1, Comp2 as Comp02, Comp4, Comp5, Comp6 } from "../../components/modulo/funcionais"
//Padrao está importando Comp3 que foi export default
//export e import é o sistema de modulo do ECMAScript

export default function testeModulo() {
    return (
        <div>
            <Comp1 />
            <Comp02 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg={"export arrow function with props"} />
        </div>
    )
}