import generateCMPTests from '../playwright/runner';

generateCMPTests('bwr-cookie', ['https://www.dinmedia.de/de', 'https://www.din.de/de', 'https://www.dinmedia.de/en']);
