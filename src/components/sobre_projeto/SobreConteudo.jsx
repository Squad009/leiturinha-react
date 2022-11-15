import React from "react";

import "../../css/sobre_projeto.css";

export default class SobreConteudo extends React.Component{
    render(){
        return(
            <section className="container">
                <div className="row justify-content-center">
                    <div className="card text-white w-50" style={{backgroundColor : '#03A65A'}}>
                        <h2 className="title_font">Bem vindo ao Leio, Logo Existo!</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="card text-white" style={{flex:2,backgroundColor : '#A62E7C'}}>
                        <div className="card-body">
                            <h2 className="title_font text-center">Conheça a iniciativa</h2>

                            <p> Você Sabia que, atualmente, o Brasil ocupa a 60ª posição de 70 países, estando abaixo da média mundial em leitura no PISA,
                                Programa Internacional de Avaliaçãode Estudantes da OCDE? 
                                Segundo os dados do Instituto Pró-Livro, com base nos anos 2015/2016, 61% das escolas públicas no Brasil NÃO POSSUEM 
                                BIBLIOTECA OU SALA DE LEITURA, 44% da população brasileira não lê e 30% nunca comprou um livro.
                                Preocupante não é mesmo?
                                Pensando nisso, desenvolvemos o "Leio, logo existo!", uma página virtual para auxiliar mentores e professores 
                                a incentivar seus alunos a ler cada vez mais e descobrir a importância da leitura para a construção do 
                                conhecimento.
                            </p>
                        </div>
                    </div>
                    <div className="card text-white" style={{flex:2,backgroundColor : '#F2622E'}}>
                        <div className="card-body">
                            <h2 class="title_font text-center ">Objetivo</h2>
                            <p>
                                Um dos maiores desafios para os professores é encontrar novas maneiras para incentivar a leitura entre
                                os estudantes. Isso acontece, pois os alunos estão cada vez mais habituados a utilizar recursos digitais 
                                em seu cotidiano, fazendo com que um livro ou uma revista não sejam considerados tão atraentes assim 
                                atualmente. 
                                Dessa forma, buscamos desenvolver uma solução para tornar o trabalho com a literatura mais interessante, 
                                tanto para o aluno quanto para o professor, e, assim, contribuir para a diminuição da baixa proficiência 
                                em leitura.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card text-white" style={{flex:2,backgroundColor : '#F2D22E'}}>
                        <div className="card-body">
                            <h2 class="title_font text-center">Por quê ler?</h2>
                            <p>
                            A leitura está presente em inúmeras atividades do nosso dia a dia, em tarefas simples, como conversar nas 
                            redes sociais ou se cadastrar em um site, e até nas mais complicadas, como fazer uma prova de vestibular 
                            ou um currículo para conseguir o emprego dos sonhos.
                            A falta de proficiência em leitura afeta o desenvolvimento do pensamento crítico, a capacidade de 
                            raciocínio lógico, argumentação e coesão, além da habilidade de resolução de problemas, dificultando o 
                            acesso ao mercado de trabalho e a inserção na sociedade.
                            Por isso, acreditamos que estimular a leitura é a chave para a construção de um mundo melhor.

                            </p>
                        </div>
                    </div>
                    <div className="card text-white" style={{flex:2,backgroundColor : '#1E4DD9'}}>
                        <div className="card-body">
                            <h2 class="title_font text-center">Projeto</h2>
                            <p>
                                O "Leio, logo exito!" é um projeto desenvolvido com o intuito de integrar o mundo digital com o mundo da
                                leitura, possiblitando aos alunos entender a importância e o valor que a leitura tem para a vida em geral. Além disso, 
                                o projeto visa auxiliar o professor na sua missão de apresentar a leitura como algo que também pode ser divertido e 
                                interessante.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card text-success w-75" style={{borderColor : '#03A65A'}}>
                    <div className="card-body">
                            <h2 className="title_font text-center">Idealizadores</h2>
                            <p className="text-center">
                                Cristiano Santos, Graziela Rodrigues, Leticia Bitencourt, Renata Adame, Patrick Silva e Paula Alexsandra
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
