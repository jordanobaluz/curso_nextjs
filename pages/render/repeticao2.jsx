import listaProdutos from '../../data/listaProdutos'

export default function repeticao2() {
    const bordarTable = {
        border: "1px solid black",
        borderCollapse: "collapse",
        padding: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    }

    function rendezirLinhas() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td style={bordarTable}>{produto.id}</td>
                    <td style={bordarTable}>{produto.nome}</td>
                    <td style={bordarTable}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={bordarTable}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {rendezirLinhas()}
                </tbody>
            </table>
        </div>
    )
}