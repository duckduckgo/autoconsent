import generateCMPTests from "../playwright/runner";

generateCMPTests('pubtech', [
    'https://www.liberoquotidiano.it/',
    'https://www.liberoquotidiano.it/?refresh_ce',
    'https://www.telefonino.net/',
    'https://www.telefonino.net/?refresh-ce',
    'https://www.fattoincasadabenedetta.it/'
]);
