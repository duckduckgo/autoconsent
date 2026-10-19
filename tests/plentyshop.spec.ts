import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'plentyshop',
    ['https://www.outlet46.de/', 'https://www.tooltraders.de/', 'https://www.silberschmuckwelt.de/', 'https://www.kalb-licht.de/'],
    {},
);
