import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clickdoc.fr_ike', ['https://clickdoc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
