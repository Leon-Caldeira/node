const DireitosAp = ['Conviver', 'Brincar', 'Participar', 'Explorar', 'Expressar', 'Conhecer-se'];
const CampExp = ['O eu, o outro e o nós', 'Corpo, gestos e movimentos', 'Traços, sons, cores e formas', 'Escuta, fala, pensamento e imaginação', 'Espaço, tempo, quantidades, relações e transformações'];

module.exports =
    {
        "Educação Infantil": [
            {componente:"Educação Infantil", tipo:'ci', DireitosAp, CampExp, nome: "Cuidando da minha história", ha: 2, cod: "edci"},
            {componente:"Educação Infantil", tipo:'ci', DireitosAp, CampExp, nome: "Cuidando de João Pessoa", ha: 2, cod: "edci"},
            {componente:"Educação Infantil", tipo:'ci', DireitosAp, CampExp, nome: "Cuidando do Planeta", ha: 2, cod: "edci"},
            {componente:"Educação Infantil", tipo:'ci', DireitosAp, CampExp, nome: "Cuidando do ser criança", ha: 2, cod: "edci"},
        ],
        "Ciclo 1": [
            {componente:"Ciclo 1", tipo:'c', nome: "Artes", ha: 2, eixos: ["Eixo único"], cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Ciências", eixos: ["Matéria e Energia", "Vida e Evolução", "Terra e Universo"], ha: 3, cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Educação Física", eixos: ["Eixo único"], ha: 3, cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Ensino Religioso", eixos: ["Eixo único"], ha: 1, cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Geografia", ha: 3, eixos: ["Eixo único"], cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "História", eixos: ["Mundo Pessoas: Meu lugar no mundo."], ha: 4, cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Língua Portuguesa", eixos: ["Oralidade", "Leitura", "Produção de Texto", "Análise Linguística/Semiótica"], ha: 5, cod: "ai"},
            {componente:"Ciclo 1", tipo:'c', nome: "Matemática", eixos: ["Números", "Geometría", "Grandezas e Medidas", "Álgebra"], ha: 5, cod: "ai"}
        ],
        "Ciclo 2": [
            {componente:"Ciclo 2", tipo:'c', nome: "Artes", ha: 2, eixos: ["Eixo único"], cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Ciências", eixos: ["Matéria e Energia", "Vida e Evolução", "Terra e Universo"], ha: 3, cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Educação Física", eixos: ["Eixo único"], ha: 3, cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Ensino Religioso", eixos: ["Eixo único"], ha: 1, cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Geografia", ha: 3, eixos: ["Eixo único"], cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "História", eixos: ["Sujeitos históricos", "Tempo Histórico", "Fatos Históricos"], ha: 4, cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Língua Portuguesa", eixos: ["Leitura", "Análise Linguística: Discursividade, Textualidade e Normatividade", "Análise Linguística: Apropriação do Sistema da Escrita Alfabética", "Produção Textual", "Oralidade"], ha: 5, cod: "ai"},
            {componente:"Ciclo 2", tipo:'c', nome: "Matemática", eixos: ["Números e Operações", "Geometría", "Grandezas e Medidas", "Álgebra"], ha: 5, cod: "ai"}
        ],
        "Fundamental 1": [
            {componente:"Fundamental 1", tipo:'c', nome: "Artes", ha: 2, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "Ciências", ha: 4, cod: "f1"},
            {componente:"Fundamental 1", tipo:'c', nome: "Educação Física", ha: 3, cod: "f1"},
            {componente:"Fundamental 1", tipo:'c', nome: "Ensino Religioso", ha: 1, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "Geografia", ha: 3, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "História", ha: 4, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "Língua Portuguesa", ha: 6, cod: "f1"},
            {componente:"Fundamental 1", tipo:'n', nome: "Matemática", ha: 5, cod: "f1"}
            ],
        "Fundamental 2": [
            {componente:"Fundamental 2", tipo:'n', nome: "Artes", ha: 2, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Ciências", ha: 4, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Educação Física", ha: 3, cod: "f2"},
            {componente:"Fundamental 2", tipo:'c', nome: "Ensino Religioso", ha: 1, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Geografia", ha: 3, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "História", ha: 4, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Língua Portuguesa", ha: 6, cod: "f2"},
            {componente:"Fundamental 2", tipo:'n', nome: "Matemática", ha: 5, cod: "f2"}
        ],
        "EJA 1° Segmento":  [
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Artes", ha: 1, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Ciências", ha: 1, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Educação Física", ha: 1, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Ensino Religioso", ha: 1, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Geografia", ha: 1, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "História", ha: 2, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Língua Portuguesa", ha: 4, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Matemática", ha: 3, cod: "eja1"},
            {componente:"EJA 1° Segmento", tipo:'n', nome: "Qualificação Profissional", ha: 1, cod: "eja1"},
        ],
        "EJA 2° Segmento":  [
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Artes", ha: 2, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Ciências", ha: 3, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Educação Física", ha: 1, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Ensino Religioso", ha: 1, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Geografia", ha: 3, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "História", ha: 3, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Língua Portuguesa", ha: 5, cod: "eja2"},
            {componente:"EJA 2° Segmento", tipo:'n', nome: "Matemática", ha: 5, cod: "eja2"},
        ]
    }