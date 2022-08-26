import Linha from "../../components/Linha"
import Subdivisao from "../../components/Subdivisao"
import style from "./tabuleiro.module.css"

export default function tabuleiro() {
    return (
        <div className={style.tabuleiro}>
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
        </div>
    )
}