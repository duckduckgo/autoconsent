import generateCMPTests from '../playwright/runner';

generateCMPTests('zorginstituut-cookiewarning', [
    'https://www.farmacotherapeutischkompas.nl/',
    'https://www.medicijnkosten.nl/',
    'https://www.istandaarden.nl/',
    'https://www.zorginzicht.nl/',
    'https://www.zorgcijfersdatabank.nl/',
    'https://www.horizonscangeneesmiddelen.nl/',
]);
