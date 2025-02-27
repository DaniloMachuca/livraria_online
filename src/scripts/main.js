$(document).ready(function () {
  $(".livros button").click(function () {
    //constante do novo item no carrinho
    const novaLista = $('<li class="me-4 do-carrinho"></li>');

    //constantes do livro
    const imagenLivro = $(this).parent().find("img").attr("src");
    const nomeLivro = $(this).parent().find("h3").text();
    const valorLivro = $(this).parent().find("p").text();

    //função para adicionar as contantes do livro à constante do novo elemento no carrinho
    $(` 
        <div class="container">
            <img src="${imagenLivro}" alt="">
            <h4>${nomeLivro}</h4>
            <strong>${valorLivro}</strong>
            </div>
        <button type="button" class="btn btn-outline-danger apagar">Remover</button>
        `).appendTo(novaLista);

    //função q adiciona a constante do novo item ao html
    $(novaLista).appendTo("#carrinhoDeCompras");

    $(".apagar").click(function () {
      $(this).parent().remove();
    });
  });

  $("#removeTdsItens").click(function () {
    $(".do-carrinho").remove();
  });

  $("#telefone").mask("(00) 000000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir com o atendimento!");
    },
  });
});
