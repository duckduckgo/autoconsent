import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jdsports.fr_hyn', ['https://www.jdsports.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
