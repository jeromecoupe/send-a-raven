/**
 * Play Sound on click
 */

/**
 * Get all ravens
 */
const allRavens = document.querySelectorAll(".js-raven");

/**
 * Boucler sur les `.js-raven`
 * - trouver le player audio
 * - si player audio trouvé
 *  - pause
 *  - rewind (remettre le temps à 0)
 */
function resetAllPlayers() {
  allRavens.forEach(function (raven) {
    const audioPlayer = raven.querySelector(".js-raven-audio");
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
  });
}

/**
 * Boucler sur les `.js-raven`
 * - tourver les liens
 * - trouver les player audio
 * - si lien ou audio pas présent on fait un early return
 * - on écoute les click sur le lien
 *  - quand click on reset tous les autres players
 *  - on joue le player
 */
function init() {
  allRavens.forEach(function (raven) {
    const ravenLink = raven.querySelector(".js-raven-link");
    const audioPlayer = raven.querySelector(".js-raven-audio");

    if (!ravenLink || !audioPlayer) {
      return;
    }

    ravenLink.addEventListener("click", function (event) {
      event.preventDefault();
      resetAllPlayers();
      audioPlayer.play();
    });
  });
}

export { init };
