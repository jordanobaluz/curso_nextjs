import { Component } from "react";
import Contador from "../../components/Contador";

export default class ContadorPage extends Component {
    //responsavel por renderizar na tela
    render() {
        return (
            <div>
                <Contador valorInicial={100} passo={15} />
            </div>
        )
    }
}