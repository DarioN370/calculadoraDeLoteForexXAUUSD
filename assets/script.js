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

function updateClocks() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  const londonTime = new Date().toLocaleTimeString('pt-BR', {
    ...options,
    timeZone: 'Europe/London'
  });

  const nyTime = new Date().toLocaleTimeString('pt-BR', {
    ...options,
    timeZone: 'America/New_York'
  });

  document.getElementById('london-time').innerText = londonTime;
  document.getElementById('ny-time').innerText = nyTime;
}

// Atualiza a cada segundo
setInterval(updateClocks, 1000);
// Chama uma vez ao carregar para não esperar 1 segundo
updateClocks();