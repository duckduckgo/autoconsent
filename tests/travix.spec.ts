import generateCMPTests from '../playwright/runner';

generateCMPTests('travix', [
    'https://www.cheaptickets.nl/',
    'https://www.cheaptickets.de/',
    'https://www.budgetair.co.uk/',
    'https://www.budgetair.nl/',
    'https://www.flugladen.de/',
]);
