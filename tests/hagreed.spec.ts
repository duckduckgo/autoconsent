import generateCMPTests from '../playwright/runner';

generateCMPTests('hagreed', [
    'https://www.ugc.be/',
    'https://www.ugc.fr/',
    'https://tizy.fr/',
    'https://www.hagreed.com/',
    'https://afsep.fr/',
]);
