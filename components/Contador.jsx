import { Component } from "react";

export default class Contador extends Component {
    //cria o estado
    state = {
        numero: this.props.valorInicial ?? 1,
        passo: this.props.passo ?? 1
    }

    //cria a função
    increment = () => {
        this.setState({
            numero: this.state.numero + this.props.passo
        })
    }
    //setState permite alterar o estado do componente

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.props.passo
        })
    }

    //renderiza o formulario 
    renderForm() {
        return (
            <>
                <input type="number" value={this.state.passo} onChange={e => this.setState({ passo: +e.target.value })} />
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (usando classe)</h1>
                <h2>Valor passado por parametro: {this.props.valorInicial}</h2>
                <h2>Valor iniciado no state: {this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }
}

//this irá permitir o acesso as propriedades passadas por parametros