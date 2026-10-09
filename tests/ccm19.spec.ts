import generateCMPTests from '../playwright/runner';

generateCMPTests('ccm19', [
    'https://www.munich.travel/en',
    'https://www.verbund.com/',
    'https://www.berufsstrategie.de/',
    'https://www.waiblingen.de/',
    'https://www.reutlingen.de/',
    'https://www.stil.de/',
    'https://www.zitate.de/',
]);
