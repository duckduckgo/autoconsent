import generateCMPTests from '../playwright/runner';

generateCMPTests('efilli', [
    'https://www.koctas.com.tr/', // reject is an inline text link
    'https://www.akbank.com/',
    'https://www.araskargo.com.tr/', // icon-only buttons
    'https://webrazzi.com/', // TCF variant
    'https://www.turkcell.com.tr/',
    'https://www.emlakjet.com/',
]);
