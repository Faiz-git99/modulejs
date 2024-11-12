// Importer la fonction getHeure sur le fichier generate.js
 import  getHeure  from "./generate.js";

// importe la variable nom depuis le fichier user.js
 import {nom} from "./user.js";

// Récupérer l'élément qui a pour identité "nom" dans le DOM
let nomUtilisateur = document.querySelector("#nom");

/*Récupère la variable déclarée (nomUtilisateur) et avec .textContent, qui permet d'insérer le message 
du côté du DOM. On lui assigne une valeur */
nomUtilisateur.textContent = nom;

// importer l'objet utilisateur depuis user.js
import { Utilisateur } from "./user.js";

// 3. afficher dans index.html le nom, prénom et le village
let objetUtilisateur = document.querySelector("#utilisateur");
objetUtilisateur.textContent = Utilisateur.nomUtilisateur +" " + Utilisateur.prenomUtilisateur;

let village = document.querySelector("#village");
village.innerHTML = Utilisateur.villageUtulisateur;

 //const heureCourant = getHeure;

 //console.log(heureCourant);

 //document.body.innerHTML = heureCourant;
                                            