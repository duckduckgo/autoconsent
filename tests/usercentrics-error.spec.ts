import generateCMPTests from '../playwright/runner';

generateCMPTests('usercentrics-error', ['https://www.stylight.de/', 'https://www.stylight.com/', 'https://www.stylight.fr/'], {});
