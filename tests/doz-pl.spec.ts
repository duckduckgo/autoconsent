import generateCMPTests from '../playwright/runner';

generateCMPTests('doz-pl', ['https://doz.pl/'], { testSelfTest: true });
