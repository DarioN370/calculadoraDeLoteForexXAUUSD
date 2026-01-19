# 📊 Calculadora de Lote

Uma ferramenta web simples e eficiente projetada para auxiliar traders no cálculo de dimensionamento de posição (lote) com base em um valor alvo e na quantidade de pontos/pips. 

Este projeto é ideal para quem busca agilidade no gerenciamento de risco dentro do mercado financeiro (Forex, Índices, etc).

---

## 🚀 Sobre o Projeto

O objetivo principal desta calculadora é automatizar a divisão do capital em risco ou alvo pela variação do preço em pontos, retornando o tamanho exato do lote a ser utilizado na operação.

### Funcionalidades:
* Interface moderna com **Dark Mode**.
* Cálculo em tempo real via JavaScript.
* Design responsivo para uso em dispositivos móveis.
* Formatação numérica automática (padrão decimal).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** - Estruturação.
* **CSS3** - Design moderno e variáveis de cor.
* **JavaScript (Vanilla)** - Lógica de cálculo e manipulação do DOM.

---

## 🧮 Lógica de Cálculo

A ferramenta aplica a fórmula matemática básica para definição de volume:

$$lote = \frac{valorAlvo}{qtdPontos}$$

Onde:
* **Valor Alvo:** O montante financeiro (ex: R$ ou $).
* **Qtd Pontos:** A distância entre a entrada e o stop/alvo.

---

## 🔧 Como usar

1.  Faça o download da pasta do projeto `calculadoraDeLote`.
2.  Abra o arquivo no seu navegador de preferência (recomendado: **Brave** ou Chrome).
3.  Insira os dados nos campos correspondentes.
4.  Clique em **Calcular Lote**.

---

## 📂 Estrutura de Arquivos

```text
/
├── index.html   # Contém o HTML
├── assets       # Contém o arquivo javascript e o css
└── README.md    # Documentação do projeto