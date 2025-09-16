const valueTyped = document.getElementById("value-saque");
const btn = document.getElementById("btn");
        
btn.addEventListener("click", () => {
    const notasMoney = [200, 100, 50, 20, 10, 5, 2];
    const valueSaque = Number(valueTyped.value);
    let valueMoneySaque = valueSaque;

    notasMoney.forEach(nota => {
        let qtdNotaDentroValor = Math.floor(valueMoneySaque / nota);

        if(qtdNotaDentroValor > 0){
            console.log(`Quantidade de nota de R$${nota} que cabe no valor: ${qtdNotaDentroValor}`);

            let sobra = valueMoneySaque % nota
            valueMoneySaque = sobra;
            console.log(`Valor atual: ${valueMoneySaque}`);
        }
    });
});