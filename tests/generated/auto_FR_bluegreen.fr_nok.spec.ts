import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bluegreen.fr_nok', ['https://bluegreen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
