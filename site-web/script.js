// On attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    const shark = document.getElementById("shark-svg");
    
    // On ajoute une classe qui déclenche la rotation continue
    // (Cette rotation aurait pu être faite en pure CSS, mais
    //  le JS permet de la lancer de manière contrôlée).
    shark.style.animation = "spin 5s linear infinite";
});

// Définition de l'animation de rotation (compatible JS)
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`;
document.getElementsByTagName('head')[0].appendChild(style);
