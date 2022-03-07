<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu primeiro site em PHP</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#accordion" ).accordion();
  } );
  </script>
  <style type="text/css">
      .linha {
        font-weight: bold;
        color: cyan;
        padding-left: 10px;
        line-height: 40px;
      }
  </style>
</head>
<body>

<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>
    <?php
    for ($i = 0; $i < 3; $i++) {
      print("<span class= \"linha\">Linha número " . $i . "</span><br/>");
    }
  ?>
    </p>
  </div>
  <h3>Section 2</h3>
  <div>
    <p>
    <?php
    for ($i = 0; $i < 05; $i++) {
      print("<span class= \"linha\">Linha número " . $i . "</span><br/>");
    }
  ?>
    </p>
  </div>
  
  
<!-- Faz com que a página web seja carregada inteira, antes da sua execução (utilizada en formulários) -->
  <script type="text/javascript">
    $(document).ready(function (){
      alert("Parabéns")
    });
  </script>
</body>
</html>