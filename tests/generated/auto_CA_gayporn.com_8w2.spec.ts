import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gayporn.com_8w2', ['https://gayporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
