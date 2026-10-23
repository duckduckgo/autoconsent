import generateCMPTests from '../playwright/runner';

generateCMPTests('lineagrafica-reject', [
    'https://www.lifepronutrition.com/es/',
    'https://portalmascota.net/',
    'https://france-housses.fr/',
    'https://www.puntojardin.com/',
]);
