import generateCMPTests from "../playwright/runner";

generateCMPTests('pubtech', [
    'https://www.liberoquotidiano.it/',
    'https://www.telefonino.net/',
    'https://www.fattoincasadabenedetta.it/'
]);
