Nome do Candidato(a): Anderson Marlon Tomaz Alves
Telefone: 19 998101-8174
Linkedin: https://linkedin.com/in/andersonmarlon
Data: 07/07/2024

--

1. O que é async/await em JavaScript? (Nota: 0,2)
R: c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.

2. Qual é a sintaxe correta para definir uma função assíncrona chamada "getData"? (Nota: 0,2)
R: c) async function getData() { return new Promise({}); }

3. O que será impresso no código abaixo? (Nota: 0,7)
```javascript
let palavra = "ABC";
switch (palavra)
{
case "ACB":
 console.log("C");
 break;
case "BC":
case "ABC":
 console.log("A");
 break;
case "B":
 console.log("Hello");
 break;
 default:
 console.log("Palavra não encontrada");
 break;
```

R: b) A.

4. Escreva uma função em JavaScript chamada “somaImpares” que recebe um número inteiro
positivo “n” como parâmetro e retorna a soma de todos os números ímpares de 1 até n. (Nota: 0,7)

```javascript
function somaImpares(positiveNumber) {
    let number = 0; 
    let oddNumbersResult = 0;

    if (!positiveNumber || positiveNumber < 0) {
        console.log('Insira um número positivo') // Ou Alert ou NotificationPush
    } else {
        for (number <= positiveNumber; number++;) {
            if (number % 2 !== 0) {
                oddNumbersResult += number
            }
        }
    }

    return `A soma de todos os ímpares entre 0 e ${number} é ${oddNumbersResult}`;
}
```

Explicando o que foi feito: Pegamos o valor de número que é zero, comparamos se é menor ou igual ao número que iremos
receber, no caso, **positiveNumber** que virá do usuário, verificamos se ele existe ou se é negativo, caso seja,
receberá um aviso, senão, seguirá para um loop aonde, iremos pegar o numero zero e comparar com positiveNumber, ver se a
divisão dele por dois é diferente de zero (se for igual a zero é par), pegamos o valor e guardamos em
**oddNumbersResult**, ao mesmo tempo em que somamos ele com o número que temos dentro dele já (inicialmente, zero), e
seguiremos esse loop de pegar o numero e ir somando com o valor anterior desde que a divisão por dois dele, seja
diferente do zero. No final, mostramos a soma que aconteceu durante todo o processo de loop até o número mencionado pelo
usuário.

5. Escreva uma função chamada” inverterPalavra” que recebe uma string como parâmetro e retorna a
string com as letras invertidas.

```javascript
function inverterPalavra(reverseWord) {
    let result = reverseWord.split('').reverse().join('');
    document.getElementById('resultWords').innerHTML = result;
}
```

Explicando o que foi feito: Pegamos a palavra do usuário através do reverseWord, usaremos o **split**,
para separar as palavras em um array de caracteres para manipulá-los com mais facilidade, em seguida,
usamos o **reverse**, para inverter os lados, colocando eles totalmente o contrário, e usamos,
o **join** para unir esse array de caracteres em uma única string.

6. Considere o seguinte trecho de código em JavaScript que tenta realizar a divisão de dois números:
(Nota: 0,7)

```javascript
function dividirNumeros(number1, number2) {
 try
    {
    if (number2 === 0)
    {
        throw new Error("Divisão por zero não é permitida.");
    }
    return number1 / number2;
    } catch (error) {
        return "Erro: " + error.message;
    }
 }
```

O retorno de `console.log(dividirNumeros(20, 2));`, será 10.
O retorno de `console.log(dividirNumeros(6, 0));` será `Divisão por zero não é permitida.`
O retorno de `console.log(dividirNumeros(21, 3));` será 7.

7. Como você pode percorrer e mapear um array JSON em JavaScript? Explique como usar métodos
como "map", "forEach" ou "for...of" para iterar e manipular os elementos do array. (Nota: 0,7)

R: Como a própria pergunta já responde, é possível percorrer e mapear um array JSON, usando
map, forEach ou for...of. 

**Como utilizar o map?**
O map é responsável por criar um novo array com base na informação, por exemplo.

```javascript
let jsonArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

let names = jsonArray.map(item => item.name);
console.log(names); // ["John", "Jane", "Doe"]
```

Com base nisso, conseguimos utilizar names[2], pare definir, `Doe` como resultado.

**Como utilizar o forEach?**
O forEach chama uma função para cada array, dessa forma, ele irá chamar uma operação para cada
elemento sem precisar criar um novo array, muito útil quando se trata de IDs de usuário.

```javascript
jsonArray.forEach(item => {
    console.log(`ID: ${item.id}, Name: ${item.name}`);
});
// ID: 1, Name: John
// ID: 2, Name: Jane
// ID: 3, Name: Doe
```

**Utilizando o for...of**
Ele pega objetos e arrays e lê em sequencial, seguindo como base a quantidade de itens que tem dentro
daquele objeto. Útil quando você precisa iterar sobre cada elemento.

```javascript
for (let item of jsonArray) {
    console.log(`ID: ${item.id}, Name: ${item.name}`);
}
// ID: 1, Name: John
// ID: 2, Name: Jane
// ID: 3, Name: Doe
```

## Resumo das Diferenças
- map: Cria um novo array transformado com base nos elementos do array original.
- forEach: Executa uma função para cada elemento do array sem retornar um novo array.
- for...of: Itera sobre cada elemento do array de uma maneira simplificada e mais fácil de ler, sem transformar o array.

8. Em JavaScript, é possível ter múltiplas condições em uma estrutura "if/else"? Descreva como usar
operadores lógicos (como "&&" e "||") para combinar condições. (Nota: 0,7)

R: Sim, é possível. Vamos utilizar do exemplo básico de comparação.

Nesse caso, teremos as condições de E/AND e OU/OR.

**Utilizando do && (AND)**
```javascript
if (myName === 'Anderson' && myAge === 28) {
    return true
} else {
    return false
}
```

Nesse caso, se myName for Anderson e myAge for 28, ele retornará verdadeiro, senão, retornará falso.

**Utilizando do || (OR)**
```javascript
if (myName === 'John' || myName === 'Doe' || myName === 'Jane') {
    return true
} else {
    return false
}
```

Se caso myName for John ou Doe ou Jane retornará verdadeiro, senão, retornará falso.

9. Descreva a sintaxe do bloco "try" em JavaScript. Dê um exemplo prático de como usar o "try" para
envolver um código suscetível a erros. (Nota: 0,7)

```javascript
let jsonString = '{"name": "John", "age": 30}';

try {
    let user = JSON.parse(jsonString);
    console.log(user.name); // Saída: John
} catch (error) {
    console.log("Erro ao analisar JSON: ", error.message);
}
```

Neste exemplo, temos o bloco `try` aonde tentamos analisar o jsonString usando JSON.parse,
se for válido, ele irá chamar o `console.log`, caso ao contrário, ele entrará no bloco `catch`,
e ali será informado o erro adequadamente. Se for o caso de uma requisição HTTP, ele conseguirá
retornar exatamente qual status HTTP ocorreu, como um 400, 200 ou 500. Com base nisso,
conseguimos fazer o tratamento adequado.

10. Como você pode lançar manualmente uma exceção em JavaScript? Explique o uso da
palavra-chave "throw" para criar e lançar exceções personalizadas. (Nota: 0,7)

Usando "throw", você é capaz de retornar um valor de erro que vai interromper o sistema, ou a
requisição, dependendo do caso, quando ela atingir uma determinada condição. A mesma pode até
ser utilizar dentro do bloco `catch`, para indicar um erro, já que o `console.log`,
não possui a propriedade para interromper a requisição quando ele for executado.

```javascript
function doSomething(value) {
    if (value > 100) {
        throw new CustomError("O valor não pode ser maior que 100.");
    }
    return value;
}
```

1. Qual é a tag HTML correta para inserir uma imagem? (Nota: 0,2)
b) <img src="imagem.jpg" alt="Descrição">

1. Qual valor da propriedade CSS position remove o elemento do fluxo normal do documento e
posiciona-o em relação ao elemento pai mais próximo posicionado? (Nota: 0,2)
a) relative

1. Qual propriedade CSS é usada para controlar a ordem de empilhamento de elementos
posicionados? (Nota: 0,2)
b) position

1. Qual valor de propriedade CSS é usado para ocultar um elemento, mas ainda reservando seu
espaço na página? (Nota: 0,2)
b) visibility: hidden;

1. Qual declaração CSS é usada para aplicar um estilo em elementos com uma classe específica?
(Nota: 0,2)
b) .nome-da-classe { ... }

SQL
1. Como você seleciona todas as colunas de uma tabela em SQL? (Nota: 0,2)
b) SELECT *

1. Qual é o comando SQL utilizado para filtrar resultados em uma consulta? (Nota: 0,2)
d) WHERE

1. Qual é o comando SQL utilizado para ordenar os resultados de uma consulta em ordem
ascendente? (Nota: 0,2)
a) ORDER ASC

1. Qual é o comando SQL utilizado para inserir novos dados em uma tabela? (Nota: 0,2)
b) INSERT

1. Qual é o comando SQL utilizado para atualizar dados em uma tabela? (Nota: 0,2)
b) UPDATE

## Integração de sistemas
1. O que é integração de sistemas? (Nota: 0,2)
a) É um processo de comunicação entre diferentes sistemas de computador para permitir o compartilhamento
de dados e funcionalidades.

1. O que significa API (Interface de Programação de Aplicativos) em integração de sistemas? (Nota:
0,2)
c) Um conjunto de funções e procedimentos que permitem a comunicação entre sistemas.

1. O que é um Web Service? (Nota: 0,2)
c) É uma solução para conectar sistemas diferentes via web, usando padrões como XML e SOAP.

1. O que é um token de acesso em integração de sistemas? (Nota: 0,2)
c) Uma chave de autenticação usada para autorizar o acesso a um serviço.

1. O que é um "webhook" na integração de sistemas? (Nota: 0,2)
d) É uma URL pública fornecida por um sistema para receber notificações automáticas de outro sistema.

1. O que é JSON? (Nota: 0,2)
c) Um formato de dados leve e de fácil leitura usado para trocar informações entre sistemas.

## TESTE TEÓRICO
1. Qual é o código de status HTTP que indica sucesso na solicitação? (Nota: 0,2)
a) 200 OK.

1. O que são headers HTTP? (Nota: 0,2)
b) Informações adicionais enviadas pelo cliente e servidor em uma solicitação ou resposta HTTP.

1. Quais são os delimitadores usados para marcar tags em XML? (Nota: 0,2)
d) < >

1.  Qual é a diferença entre integração de sistemas síncrona e assíncrona? (Nota: 0,2)
b) A integração síncrona só pode ocorrer entre sistemas da mesma empresa, enquanto a assíncrona permite
a comunicação entre empresas diferentes.
