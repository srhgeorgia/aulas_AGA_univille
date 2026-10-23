
const produtos = {
    samsung: {
        nome: "Smart TV Samsung",
        descricao: "Televisor para sua casa e seu entretenimento.",
        preco: "R$ 2.000,00",
        parcelamento: "R$ 200,00 em 10x",
        imagem: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
        categoria: "tvs.html",
        alt: "Smart TV Samsung"
    },

    lg: {
        nome: "Smart TV LG",
        descricao: "Televisor para assistir a filmes, séries e muito mais.",
        preco: "R$ 2.500,00",
        parcelamento: "R$ 250,00 em 10x",
        imagem: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=700&q=80",
        categoria: "tvs.html",
        alt: "Smart TV LG"
    },

    philips: {
        nome: "Smart TV Philips",
        descricao: "Televisor para completar seu ambiente de entretenimento.",
        preco: "R$ 1.800,00",
        parcelamento: "R$ 180,00 em 10x",
        imagem: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",
        categoria: "tvs.html",
        alt: "Smart TV Philips"
    },

    suporte: {
        nome: "Suporte de parede para TV",
        descricao: "Acessório para instalar sua televisão na parede.",
        preco: "R$ 100,00",
        parcelamento: "R$ 50,00 em 2x",
        imagem: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
        categoria: "acessorios.html",
        alt: "Suporte para TV"
    },

    controle: {
        nome: "Controle remoto universal",
        descricao: "Controle para facilitar o uso da televisão.",
        preco: "R$ 80,00",
        parcelamento: "R$ 40,00 em 2x",
        imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=700&q=80",
        categoria: "acessorios.html",
        alt: "Controle remoto"
    },

    hdmi: {
        nome: "Cabo HDMI 2.1",
        descricao: "Cabo para conectar dispositivos compatíveis à TV.",
        preco: "R$ 60,00",
        parcelamento: "R$ 30,00 em 2x",
        imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
        categoria: "acessorios.html",
        alt: "Cabo para conexão"
    }
};

const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("produto");
const produto = produtos[idProduto];

const elementoNome = document.getElementById("detalhe-nome");

if (elementoNome) {
    if (produto) {
        document.title = `${produto.nome} - TV Store`;

        document.getElementById("detalhe-imagem").src = produto.imagem;
        document.getElementById("detalhe-imagem").alt = produto.alt;
        elementoNome.textContent = produto.nome;

        document.getElementById("detalhe-descricao").textContent =
            produto.descricao;

        document.getElementById("detalhe-preco").textContent =
            produto.preco;

        document.getElementById("detalhe-parcelamento").textContent =
            produto.parcelamento;

        document.getElementById("voltar-categoria").href =
            produto.categoria;
    } else {
        elementoNome.textContent = "Produto não encontrado";

        document.getElementById("detalhe-descricao").textContent =
            "Não foi possível identificar o produto. Volte à lista e selecione um produto.";

        document.getElementById("detalhe-imagem").hidden = true;
        document.getElementById("detalhe-preco").hidden = true;
        document.getElementById("detalhe-parcelamento").hidden = true;
        document.getElementById("voltar-categoria").href =
            "../index.html";

        document.getElementById("voltar-categoria").textContent =
            "Voltar para Home";
    }
}
