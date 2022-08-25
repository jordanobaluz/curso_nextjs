export default function integracao() {
    return (
        <div className="integracao1">
            <div className="vermelha">Texto #1</div>
            <div className="azul">Texto #2</div>
            <div className="branco">Texto #3</div>
        </div>
    )
}

//devido as regras do NextJS, não se pode importar o css direto no componente para realizar a estilização precisa importar dentro de _app.js que será uma importação global e especificar dentro do arquivo css as classes