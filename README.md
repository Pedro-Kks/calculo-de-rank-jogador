# 🏆 Calculadora de Partidas Rankeadas 🎮

Bem-vindo ao projeto **Calculadora de Partidas Rankeadas**!  
Um script simples feito em **JavaScript (Node.js)** que simula a classificação de um jogador baseado no seu desempenho: 🥇 vitórias vs 🟥 derrotas!

---

## ✨ O que esse projeto faz?

💬 O programa pergunta:

- 🧑‍💻 Qual o nome do jogador?
- ✅ Quantas **vitórias** ele tem?
- ❌ Quantas **derrotas** ele sofreu?

📊 Com esses dados, ele calcula o **saldo de vitórias** (vitórias - derrotas) e retorna o **Elo do jogador**, como nos jogos competitivos!

---

## 🧠 Regras de Classificação (Elo)

| 🧮 Saldo de Vitórias | 🏅 Elo             |
|----------------------|-------------------|
| < 10                 | ⚫ Ferro           |
| 11 ~ 20              | 🟤 Bronze          |
| 21 ~ 50              | ⚪ Prata           |
| 51 ~ 80              | 🟡 Ouro            |
| 81 ~ 90              | 💎 Diamante        |
| 91 ~ 100             | 🔥 Lendário        |
| > 100                | 🌟 Imortal         |

---

## ▶️ Como executar

1. 📦 Instale o Node.js se ainda não tiver ([nodejs.org](https://nodejs.org))
2. 🧩 Instale o pacote `prompt-sync`:
   ```bash
   npm install prompt-sync
   ```
3. Rode o arquivo
   ```bash
   node nome-do-arquivo.js
   ```
4. Terminal
  ```bash
Digite o nome do jogador: Fulano
Digite a quantidade de vitórias do jogador: 78
Digite a quantidade de derrotas do jogador: 30

O Fulano tem 78 vitórias e 30 derrotas atualmente.
>>> Saldo de Vitórias: 48. Elo do Fulano: Prata <<<
```

## 🚀 Habilidades praticadas

    📥 Captura de entrada no terminal com prompt-sync

    🧠 Lógica condicional if/else

    🧾 Manipulação de objetos em JavaScript

    🎨 Formatação e personalização de saídas com emojis
   

   
