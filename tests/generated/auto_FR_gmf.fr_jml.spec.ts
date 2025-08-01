import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gmf.fr_jml', ['https://www.gmf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
