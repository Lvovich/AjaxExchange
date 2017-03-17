<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <meta charset="UTF-8">
    <title>ОБРАЗЕЦ ОБМЕНА</title>
</head>
<body>
    <button>Пнуть на сервер</button>
    <script src="release/aex.min.js"></script>
</body>
</html>


<script>
    var butt = document.querySelector('button'),
        aex = new AEX({target:'ajax.php'}),
        data = {
            tralala  : [4,5],
            eprst    : 'qwer',
            ischoObj : {
                ipaaat : '!',
                b      : true
            }
        };

    butt.onclick = function () {
        aex.kick(data, function (response) {})
    };

</script>
