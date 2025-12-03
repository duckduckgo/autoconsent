import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_truffaut.com_d46', ['https://www.truffaut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
