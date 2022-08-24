export default function lista1() {
  return <div>{createList(10)}</div>;
}

function createList(qtd) {
  let lista = [];
  for (let i = 0; i < qtd; i++) {
    lista.push(<p key={i}>{i},</p>);
  }
  return lista;
}
