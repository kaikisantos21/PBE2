

function validarFormulario() {
    let valid = true;
    const campos = ["nome", "logradouro", "numero", "bairro", "cidade", "estado", "cep", "pais"];
    let mensagensErro = {
        nome: "Por favor, preencha o nome completo.",
        logradouro: "O logradouro é obrigatório.",
        numero: "O número é obrigatório.",
        bairro: "O bairro é obrigatório.",
        cidade: "A cidade é obrigatória.",
        estado: "O estado é obrigatório.",
        cep: "O CEP deve ter o formato 00000-000.",
        pais: "O país é obrigatório."
    };

    
    campos.forEach(campo => {
        document.getElementById(campo + "Help").textContent = "";
    });

    
    campos.forEach(campo => {
        const campoElement = document.getElementById(campo);
        if (campoElement.value.trim() === "") {
            valid = false;
            document.getElementById(campo + "Help").textContent = mensagensErro[campo];
        }
    });

    
    const cep = document.getElementById("cep");
    const regexCep = /^\d{5}-\d{3}$/;
    if (!regexCep.test(cep.value.trim())) {
        valid = false;
        document.getElementById("cepHelp").textContent = "Por favor, insira um CEP válido no formato 00000-000.";
    }

    return valid;
}