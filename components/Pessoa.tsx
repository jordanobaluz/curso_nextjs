interface PessoaProps {
    nome: string
    idade?: number
}

//nome é obrigatório, porém idade não é

export default function Pessoa(props: PessoaProps){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? "idade não informada"}</div>
        </div>
    )
}