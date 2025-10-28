import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lebigdata.fr_b7a', ['https://www.lebigdata.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
