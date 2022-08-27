import FilhoIndireta from "./FilhoIndireta";

export default function PaiIndireta(props) {

    function falarComigo(params1, params2) {
        console.log(params1, params2)
    }

    return (
        <div>
            <FilhoIndireta funcao={falarComigo} />
        </div>
    )
}