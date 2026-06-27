const formulaire = document.getElementById("invocation");


formulaire.addEventListener("submit", (event) => {
        event.preventDefault();
        
const prenom = document.getElementById("prenom").value
const creature = document.getElementById("creature").value

const message = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;

console.log(message)

const messageElement = document.getElementById("message");
messageElement.textContent = message;

formulaire.classList.add("cache");

const resultat = document.getElementById("resultat");
resultat.classList.remove("cache");

});

