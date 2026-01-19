function calcularLote() {
  const valorAlvo = parseFloat(document.getElementById("valorAlvo").value);
  const qtdPontos = parseFloat(document.getElementById("qtdPontos").value);
  const resultBox = document.getElementById("resultBox");
  const displayLote = document.getElementById("loteResult");

  if (isNaN(valorAlvo) || isNaN(qtdPontos) || qtdPontos === 0) {
    alert(
      "Por favor, insira valores válidos e certifique-se de que os pontos não sejam zero.",
    );
    return;
  }

  const lote = valorAlvo / qtdPontos;

  // Exibe o resultado com 2 casas decimais
  displayLote.innerText = lote.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  resultBox.style.display = "block";
}
