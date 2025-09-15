function climatempo() {
    const local = document.getElementById("local").value;
    
    if (local === "") {
        let resultado = document.getElementById("resultado"). textContent = "erro digite um local";
    }

    else if (local === "sao paulo" || local === "Sao paulo" || local === "SAO PAULO"){
        let resultado = document.getElementById("resultado").textContent = "o clima em sao paulo e de 20 graus";
    }

    else if (local === "rio de janeiro" || local === "Rio de janeiro" || local === "RIO DE JANEIRO"){
        let resultado = document.getElementById("resultado").textContent = "o clima no rio de janeiro e de 30 graus";
    }

    else {
        let resultado = document.getElementById("resultado").textContent = "local nao encontrado";
    }
}