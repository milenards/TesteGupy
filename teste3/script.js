let indice = 12;
        let soma = 0;
        let k = 1;

        while (k < indice) {
            k = k + 1;
            soma = soma + k;
        }

        // Exibe o resultado no parágrafo com o id "resultado"
        document.getElementById("resultado").innerHTML = "O valor final de SOMA é: " + soma;