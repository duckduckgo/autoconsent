import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gmf.fr_pxt', ['https://www.gmf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
