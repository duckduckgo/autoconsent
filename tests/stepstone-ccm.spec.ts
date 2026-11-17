import generateCMPTests from '../playwright/runner';

generateCMPTests('stepstone-ccm', [
    'https://www.totaljobs.com/',
    'https://www.cwjobs.co.uk/',
    'https://www.stepstone.de/',
    'https://www.stepstone.nl/',
]);
