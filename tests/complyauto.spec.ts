import generateCMPTests from '../playwright/runner';

generateCMPTests('complyauto', [
    'https://www.johnkennedysubaru.com/',
    'https://www.penske.com/',
    'https://www.sftoyota.com/',
    'https://www.gunnchevrolet.com/',
]);
