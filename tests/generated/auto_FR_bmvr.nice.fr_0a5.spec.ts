import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bmvr.nice.fr_0a5', ['https://bmvr.nice.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
