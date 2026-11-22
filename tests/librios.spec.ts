import generateCMPTests from '../playwright/runner';

generateCMPTests('librios', [
    'https://www.noahcompendium.co.uk/',
    'https://www.lag.org.uk/',
    'https://www.aaeportal.com/',
    'https://www.interactionofcolor.com/',
]);
