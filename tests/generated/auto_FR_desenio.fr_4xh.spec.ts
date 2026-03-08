import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_desenio.fr_4xh', ['https://desenio.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
