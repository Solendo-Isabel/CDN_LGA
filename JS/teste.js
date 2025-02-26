// Script para abrir e fechar a janela


document.getElementById('botaoFlutuante').addEventListener('click', function () {
    let iframe = document.getElementById('janelaFlutuante');
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.src = 'http://192.168.20.175:3000/';
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
});

//  TEXTO CLICAVEL  --}}

document.getElementById('botaoFlutuante').addEventListener('click', function () {
    let textos = document.querySelectorAll('p, span, a'); // Seleciona os textos

    textos.forEach(texto => {
        texto.classList.toggle('texto-clicavel'); // Adiciona ou remove a classe
    });
});

//  Enviar texto para a API  --}}


document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('texto-clicavel')) {
            let textoSelecionado = e.target.innerText;

            fetch('/api/enviar-texto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({ texto: textoSelecionado })
            })
            .then(response => response.json())
            .then(data => alert('Texto enviado com sucesso: ' + textoSelecionado))
            .catch(error => console.error('Erro:', error));
        }
    });
});


//  Enviar texto para API2  --}}

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('texto-clicavel')) {
            let textoSelecionado = e.target.innerText;

            fetch('/api/enviar-iframe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ texto: textoSelecionado })
            })
            .then(response => response.json())
            .then(data => {
                let iframe = document.getElementById('meuIframe');
                iframe.srcdoc = `<p>${data.texto}</p>`;
            })
            .catch(error => console.error('Erro ao obter texto da API:', error));
        }
    });
});
