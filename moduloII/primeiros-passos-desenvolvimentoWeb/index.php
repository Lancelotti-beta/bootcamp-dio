<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <title>Testando Coisas No PHP</title>

    <style type="text/css">

        html{
            margin: 3rem;
        }

        .jujubinha{
            margin: 3rem auto;
            text-align: center; 

            color: #000;
        }

        .texto{
            font-weight: 300;
            font-size: 3rem;

            border-bottom: 1px solid tomato;

            width: 70%;
        }

    </style>
</head>
<body>
    <?php
        $abobora = "Escrita";
        print("<div class=\"jujubinha\"><p class=\"texto\">Linha com alguma coisa " . $abobora. " aqui</p></div>")
    ?>
</body>

<script type="text/javascript">
    $(document).ready(function () {
        alert("Esta funfando :3");
    });
</script>

</html>