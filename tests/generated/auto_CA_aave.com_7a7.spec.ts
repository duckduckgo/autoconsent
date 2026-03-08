import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_aave.com_7a7', ['https://aave.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
