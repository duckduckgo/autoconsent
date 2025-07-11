import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gayporn.com_9cz', ['https://gayporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
