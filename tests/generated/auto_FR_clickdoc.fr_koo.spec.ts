import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clickdoc.fr_koo', ['https://clickdoc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
