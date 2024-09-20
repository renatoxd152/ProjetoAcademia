<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treino</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div>
        <form id="treinoForm" method="POST" action="api/treino">
            @csrf
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome"/><br/>
            <label for="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao"/><br/>
            <label for="series">Séries</label>
            <input type="text" name="series" id="series"/><br/>
            <input type="submit" value="Add"/>
        </form>
        <p id="mensagem"></p>
    </div>

    <script>
        $(document).ready(function(){
            $('#treinoForm').on('submit', function(event) {
                event.preventDefault();

                $.ajax({
                    url: $(this).attr('action'),
                    method: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        $('#mensagem').text(response.mensagem);
                    },
                    error: function() {
                        $('#mensagem').text('Ocorreu um erro ao criar o treino.');
                    }
                });
            });
        });
    </script>


</body>
</html>