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


function simularFuso() {
  const horaInput = document.getElementById("horaBrasilia").value;
  if (!horaInput) return;

  const [horas, minutos] = horaInput.split(':');
  
  // Criamos uma data baseada no dia de hoje com o horário digitado (Horário de Brasília)
  const dataBase = new Date();
  dataBase.setHours(horas, minutos, 0);

  const formatar = (fuso) => {
    return dataBase.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: fuso
    });
  };

  document.getElementById('sim-london').innerText = formatar('Europe/London');
  document.getElementById('sim-ny').innerText = formatar('America/New_York');
}