import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="João" familia={props.familia} />
            <Filho {...props} nome="Padrão" />
        </div>
    )
}

//quando o componente é chamado dentro de outro, é uma comunicação direta
//quando utilizar spread, passar as propriedades com spread primeiro, depois a propriedade que deseja mudar irá ficar errado