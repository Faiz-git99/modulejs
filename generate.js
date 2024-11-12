function getHeure(){
    const date = new Date();

    let heure = date.getHours();

    let minutes = date.getMinutes();

    let seconde = date.getSeconds();

    console.log(heure+":"+minutes+":"+seconde);
}

// Exporter la foction getHeure sur le fichier main.js
export default {
    getHeure
};