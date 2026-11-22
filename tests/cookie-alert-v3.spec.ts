import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-alert-v3', [
    'https://www.uhcw.nhs.uk/',
    'https://www.sth.nhs.uk/',
    'https://www.stonewarehouse.co.uk/',
    'https://www.pavestone.co.uk/',
]);
