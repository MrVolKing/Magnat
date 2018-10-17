
    var textwrap = document.getElementById('textwrap');
    var hidden = document.getElementById('hidden');
    var shadow = document.getElementById('shadow');

    textwrap.addEventListener('click', function () { 
        hidden.classList.remove('hidden');
        shadow.classList.toggle('shadownone');
    });



    