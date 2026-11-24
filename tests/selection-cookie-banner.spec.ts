import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'selection-cookie-banner',
    ['https://www.jugend-musiziert.org/', 'https://elstercube.de/', 'https://www.stadtwerke-neustadt-orla.de/'],
    {
        onlyRegions: ['DE'],
    },
);
