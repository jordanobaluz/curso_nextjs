export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <p>{props.principal}</p>
      <p>{props.secundario}</p>
    </>
  ) : (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
    </>
  )
}

//nome com letra maiscula em arquivos fora da pasta pages
//passagem de parametros entre componentes
