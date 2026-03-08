import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_digbmx.com_j8d', ['https://digbmx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
