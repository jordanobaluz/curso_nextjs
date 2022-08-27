import Se from "../../components/Se";

export default function condicional2() {
    const numero = 5
    return (
        <div>
            <Se teste={numero % 2 === 0}>
                O numero {numero} é par
            </Se>
            <Se teste={numero % 2 === 1}>
                O numero {numero} é impar
            </Se>
        </div>
    )
}