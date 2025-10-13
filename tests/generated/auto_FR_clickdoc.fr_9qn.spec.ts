import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_clickdoc.fr_9qn', ['https://clickdoc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
