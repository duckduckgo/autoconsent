import generateCMPTests from '../playwright/runner';

generateCMPTests('zoso-cookienotice', [
    'https://leukhuis.nl/',
    'https://popronde.nl/',
    'https://igarden.nl/',
    'https://houseofmodelcars.com/',
]);
