import generateCMPTests from '../playwright/runner';

generateCMPTests('minitool', [
    'https://de.minitool.com/',
    'https://www.minitool.com/',
    'https://jp.minitool.com/',
    'https://www.partitionwizard.com/',
]);
