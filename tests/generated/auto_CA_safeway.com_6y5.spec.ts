import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_safeway.com_6y5', ['https://www.safeway.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
