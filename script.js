const perguntas = [
    {
        pergunta: "Qual é uma maneira de exibir uma mensagem de erro em JavaScript?",
        opcoes: [
            "Exibir uma mensagem de erro",
            "Imprimir dados no console",
            "Criar uma variável"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para comentar uma linha em JavaScript?",
        opcoes: [
            "// Este é um comentário de linha",
            "/* Este é um comentário de linha */",
            "<!-- Este é um comentário de linha -->"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        opcoes: [
            "push()",
            "add()",
            "append()"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        opcoes: [
            "Verificar igualdade de valor e tipo",
            "Verificar igualdade de valor",
            "Atribuir um valor a uma variável"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        opcoes: [
            "pop()",
            "remove()",
            "deleteLast()"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Como se chama a função que é executada quando um objeto é criado a partir de uma classe em JavaScript?",
        opcoes: [
            "Construtor",
            "Inicializador",
            "Criador"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        opcoes: [
            "var",
            "variable",
            "let"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que o método 'charAt()' faz em JavaScript?",
        opcoes: [
            "Retorna o caractere em uma posição específica de uma string",
            "Concatena duas strings",
            "Substitui um caractere em uma string"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        opcoes: [
            "Converte uma string em um número inteiro",
            "Converte um número inteiro em uma string",
            "Verifica se uma variável é um número inteiro"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
        opcoes: [
            "/* Este é um comentário de várias linhas */",
            "// Este é um comentário de várias linhas",
            "<!-- Este é um comentário de várias linhas -->"
        ],
        respostaCorreta: 0
    }
]

 // MANIPULAÇÃO DA DOM

 //PEGAR ELEMENTO

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
// mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.opcoes) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.opcoes.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const correct = event.target.value == item.respostaCorreta
            
            corretas.delete(item)
            if(correct) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    // REMOVER ELEMENTO
    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}