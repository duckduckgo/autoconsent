import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'moebel-de-group',
    ['https://www.moebel.de/', 'https://www.moebel24.ch/', 'https://www.meubles.fr/', 'https://www.meubelo.nl/'],
    {
        skipRegions: ['US', 'AU', 'CA', 'JP'],
    },
);
