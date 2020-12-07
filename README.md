# projeto-01
Projeto nº 1 do curso DEVinHouse, realizado pelo SENAI em parceria com a Softplan e a ACATE

Instruções do projeto:  
Você está participando de um processo seletivo para ingressar numa vaga de programador em uma grande empresa de TI. Uma das etapas do processo envolve a criação de uma aplicação web de lista de afazeres (“to-do list”).

1. Os requisitos que a aplicação deve ter, são:

1. Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas.

1. Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo.

1. Um campo de texto para digitar o nome de uma nova atividade a ser adicionada à lista.

1. Um botão para adicionar uma nova atividade à lista.

1. Uma lista contendo as atividades já inseridas.

1. Cada linha da lista deve conter: checkbox para o usuário marcar que aquela atividade já foi realizada; o texto que o usuário digitou ao cadastrar a atividade; botão para excluir a atividade da lista, caso desejado.

1. Quando o usuário marcar uma tarefa como realizada, o texto daquela linha deve ser tachado (line-through).

1. A lista deve ser salva no "localStorage" do navegador (incluindo quais itens já foram realizados), e deve ser carregada sempre que a página for reaberta.

1. A aplicação deve ser desenvolvida utilizando HTML, CSS e JavaScript.

# resolução:

Utilizei o framework [Tailwind CSS](https://tailwindcss.com/) pra estilização. Utilizei também o [Gulp](https://github.com/gulpjs/gulp) para automatizar o fluxo de minificação, com o [Gulp Babel Minify](https://github.com/jonschlinkert/gulp-htmlmin) pra transpilar e minificar os arquivos JS e o [Gulp HTML Minifier Terser](https://github.com/pioug/gulp-html-minifier-terser) pra minificar os arquivos HTML.

Desktop:  
![Desempenho-Lighthouse-Desktop](https://github.com/gustavoluchi/projeto-01/blob/main/Lighthouse%202020-12-04%20221425.png)  
Mobile:  
![Desempenho Lighthouse Mobile](https://github.com/gustavoluchi/projeto-01/blob/main/Lighthouse%20mobile%202020-12-04%20221425.png)
