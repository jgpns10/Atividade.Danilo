  document.getElementById('contato-form').addEventListener('submit', function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                alert('Por favor, preencha todos os campos corretamente antes de enviar.');
            } else {
                alert('Formulário enviado com sucesso!');
            }
        });