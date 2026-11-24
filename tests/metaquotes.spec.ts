import generateCMPTests from '../playwright/runner';

generateCMPTests('metaquotes', [
    'https://www.mql5.com/',
    'https://www.mql4.com/',
    'https://www.metatrader5.com/',
    'https://www.metaquotes.net/',
    'https://www.finteza.com/',
]);
