import generateCMPTests from '../playwright/runner';

generateCMPTests('adstate', [
    'https://vareminnesider.no/',
    'https://steenbegravelsesbyra.vareminnesider.no/',
    'https://rijksenuitvaartzorg.gedachtenispagina.nl/',
]);
