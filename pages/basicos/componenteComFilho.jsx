import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item #01" />
                <Item conteudo="Item #02" />
                <Item conteudo="Item #03" />
            </Lista>
        </div>
    )
}


//chama o componente Lista, que vai receber via props os childrens enviados
//enviado os componentes itens como childrens de Lista, para ser rendezirado