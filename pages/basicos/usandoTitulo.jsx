import Titulo from "../../components/titulo";

export default function usandoTitulo() {
  return (
    <div>
      <h1>Usando Titulo</h1>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
        pequeno={true}
      />
      <Titulo
        principal="Página de login"
        secundario="informe seu login e senha"
      />
    </div>
  );
}
