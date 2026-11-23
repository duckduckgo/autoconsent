import generateCMPTests from '../playwright/runner';

generateCMPTests('shopblocks', [
    'https://www.towerhousewares.co.uk/',
    'https://www.redring.co.uk/',
    'https://www.rotateuk.com/',
    'https://www.tacklebag.co.uk/',
]);
