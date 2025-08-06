import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_truffaut.com_clf', ['https://www.truffaut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
