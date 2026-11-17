import generateCMPTests from '../playwright/runner';

const urls = ['https://www.jarnvag.net/', 'https://www.joomlack.fr/', 'https://www.cogentco.com/', 'https://www.unicampania.it/'];

generateCMPTests('cookiesck', urls);
