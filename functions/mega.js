export function mega(quantidade = 6, numeros = []){
    //transforma em numero o parametro que foi recebido como string
    let qtd = +quantidade

    if(qtd < 6 || qtd > 60){
        throw "Quantidade inválida!"
    }

    //retorna os numeros em ordem crescente
    if(numeros.length === qtd){
        return numeros.sort((n1, n2) => n1 - n2)
    }
    //+ 1 pois será gerado de 0 a 59
    const numeroAleatorio = parseInt(Math.random() * 60) + 1

    //testa se o numero já foi sorteado, para não ficar repetido
    if(!numeros.includes(numeroAleatorio)){
        return mega(qtd, [...numeros, numeroAleatorio])
    }else{
        return mega(qtd, numeros)
    }
}