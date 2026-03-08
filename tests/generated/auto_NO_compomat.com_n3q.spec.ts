import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_compomat.com_n3q', ['https://compomat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
