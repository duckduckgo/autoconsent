import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_justice.fr_de5', ['https://www.justice.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
