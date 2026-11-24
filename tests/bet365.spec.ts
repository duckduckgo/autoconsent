import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bet365',
    ['https://www.bet365.gr/', 'https://www.bet365.de/', 'https://www.bet365.es/', 'https://www.bet365.it/', 'https://www.bet365.dk/'],
    {
        onlyRegions: ['DE'],
    },
);
