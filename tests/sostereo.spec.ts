import generateCMPTests from '../playwright/runner';

generateCMPTests('sostereo.com', [
    'https://sostereo.com/spaces/pitch/b58c388677?slide=1',
    'https://sostereo.com/',
    'https://sostereo.com/about',
]);
