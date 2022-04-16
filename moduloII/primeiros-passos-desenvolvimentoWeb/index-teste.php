<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

    <title>Arrasteme JQuery and PHP</title>

    <style type="text/css">

        .texto{
           text-align: center;
        }

        .container { 
            width: 150px; 
            height: 150px; 
            padding: 0.5em; 

            border: 1px solid tomato;
            border-radius: 10px;

            font-weight: 100;
            font-size: 24px;
        }
    </style>

</head>
<body>

    <?php

        print("<div class=\"limita\">
            <div id=\"caixinha\" class=\"container\">
            <p class=\"texto\">Arraste-me por aqui!!!</p>
            </div>
            </div>"
        );
    
    ?>
    
</body>

<script type="text/javascript">
    $(function(){
        $("#caixinha").draggable();
    });
</script>

</html>